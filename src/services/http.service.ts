import { getCookie } from "cookies-next";
import { ACCESS_TOKEN_COOKIE_KEY } from "@/constants/index";
import { redirect } from "next/navigation";
export interface FetchOptions extends RequestInit {
  headers?: {
    [key: string]: string;
  };
  config?: {
    baseURL?: string;
    responseInterceptor?: (response: Response) => void;
    hasAttachment?: boolean;
  };
}

export enum EHttpMethod {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

type THttpServiceConfig = {
  attachToken?: boolean;
  useRefreshToken?: boolean;
  accessTokenCookieKey?: string;
  onRefreshTokenError?: () => void;
};

export class HttpService {
  public baseURL: string;
  public config?: THttpServiceConfig;
  private isRefreshing: boolean = false;
  private refreshSubscribers: ((token: string) => void)[] = [];

  constructor(baseURL: string, config?: THttpServiceConfig) {
    this.baseURL = baseURL;
    this.config = config;
  }

  private async attachDefaultHeaders(
    additionalHeaders: FetchOptions["headers"],
    hasAttachment?: boolean
  ) {
    const {
      accessTokenCookieKey = ACCESS_TOKEN_COOKIE_KEY,
      attachToken = true,
    } = this.config ?? {};

    const defaultHeaders: FetchOptions["headers"] = {};

    if (!hasAttachment) {
      defaultHeaders["Content-Type"] = "application/json";
    }

    let token = getCookie(accessTokenCookieKey);

    if (typeof window == "undefined") {
      const cookies = await import("next/headers").then((mod) => mod.cookies);

      const cookieStore = cookies();
      token = cookieStore?.get(accessTokenCookieKey)?.value;

      if (token && attachToken) {
        defaultHeaders.Authorization = `Bearer ${token}`;
      }
      return {
        Cookie: cookies().toString(),
        ...defaultHeaders,
        ...additionalHeaders,
      };
    }

    if (token && attachToken) {
      defaultHeaders.Authorization = `Bearer ${token}`;
    }
    return {
      ...defaultHeaders,
      ...additionalHeaders,
    };
  }

  public async post<T, P>(url: string, payload: P, options: FetchOptions = {}) {
    const hasAttachment = options?.config?.hasAttachment ?? false;
    return this.request<T>(url, {
      ...options,
      method: EHttpMethod.POST,
      body: hasAttachment ? payload : JSON.stringify(payload),
    });
  }
  public async patch<T, P>(
    url: string,
    payload: P,
    options: FetchOptions = {}
  ) {
    const hasAttachment = options?.config?.hasAttachment ?? false;
    return this.request<T>(url, {
      ...options,
      method: EHttpMethod.PATCH,
      body: hasAttachment ? payload : JSON.stringify(payload),
    });
  }
  public async get<T>(url: string, options: FetchOptions = {}) {
    return this.request<T>(url, options);
  }
  public async delete<T>(url: string, options: FetchOptions = {}) {
    return this.request<T>(url, {
      ...options,
      method: EHttpMethod.DELETE,
    });
  }

  public async request<T>(url: string, options: FetchOptions = {}): Promise<T> {
    const { responseInterceptor, hasAttachment = false } =
      options?.config ?? {};
    const fullUrl = `${this.baseURL}${url}`;
    const { useRefreshToken = true } = this.config ?? {};
    const headers =
      (await this.attachDefaultHeaders(options?.headers, hasAttachment)) ?? {};

    try {
      const response: Response = await fetch(fullUrl, {
        credentials: "include",
        headers,
        ...options,
      });
      if (typeof responseInterceptor === "function") {
        responseInterceptor(response);
      }

      // if status is 401 try refresh token (not using refresh token here in this project , we are using only accessToken)
      // that is useRefreshToken=false in the auth-instance.ts file
      // if (response.status === 401 && useRefreshToken) {
      //   return this.refreshToken<T>(fullUrl, options);
      // }
      if (response.status === 401) {
        return Promise.reject({
          data: null,
          message: "Unauthorized access, please login again.",
          status: 401,
        });
      }
      const data = await this.parseJson(response);

      if (!response.ok) {
        const errorMessage = this.normalizeError(data);
        throw Object.assign(new Error(errorMessage), {
          status: response.status,
        });
      }
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  private normalizeError(error: any) {
    const normalizedError = error?.errors?.[0]?.message ?? error.message;
    return normalizedError;
  }
  private async parseJson(response: Response) {
    const text = await response.text();
    try {
      const json = JSON.parse(text);
      return json;
    } catch (err) {
      if (response.status === 404) {
        throw new Error("404 not found");
      }
      if (response.status === 500) {
        throw new Error(
          "There was some problem with the server, please try again"
        );
      }
    }
  }

  private async getNewToken() {
    const url = this.baseURL + "/auth/refresh-token";
    const response = await fetch(url, {
      credentials: "include", // If you're using cookies for tokens
      cache: "no-store",
    });

    if (!response.ok) {
      const { onRefreshTokenError } = this.config ?? {};
      if (typeof onRefreshTokenError === "function") {
        onRefreshTokenError();
      }
      throw new Error("Failed to refresh token");
    }

    const data = await response.json();
    return data.token;
  }

  private async refreshToken<T>(fullUrl: string, options: FetchOptions) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      try {
        const newToken = await this.getNewToken();
        this.isRefreshing = false;
        this.onRefreshed(newToken);
      } catch (err) {
        this.isRefreshing = false;
        throw err;
      }
    }

    const retryOriginalRequest = new Promise<T>((resolve) => {
      this.subscribeTokenRefresh(async (newToken) => {
        if (options.headers) {
          options.headers["Authorization"] = "Bearer " + newToken;
        }
        const response = await fetch(fullUrl, options);

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data);
        }
        resolve(data);
      });
    });

    return await retryOriginalRequest;
  }
  private onRefreshed(token: string): void {
    this.refreshSubscribers.forEach((cb) => cb(token));
    this.refreshSubscribers = [];
  }
  private subscribeTokenRefresh(cb: (token: string) => void): void {
    this.refreshSubscribers.push(cb);
  }
}
