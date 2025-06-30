import { setCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";
import { ACCESS_TOKEN_COOKIE_KEY, USER_ROLE_KEY } from "@/constants";
import { Role } from "@/types/general";

export const setAccessToken = (accessToken: string) => {
  const decoded = jwtDecode(accessToken);
  const exp = decoded.exp ?? 60 * 60;

  // Calculate maxAge in milliseconds (exp is in seconds, Date.now() gives milliseconds)
  const maxAge = exp * 1000 - Date.now();

  // Check if maxAge is positive before setting the cookie
  if (maxAge > 0) {
    setCookie(ACCESS_TOKEN_COOKIE_KEY, accessToken, {
      maxAge: maxAge / 1000, // convert milliseconds to seconds
    });
  } else {
    console.error("The token is already expired.");
  }
};

export const seRole = (type: Role) => {
  const maxAge = 60 * 60 * 24 * 365; // 1 year
  setCookie(USER_ROLE_KEY, type, {
    maxAge,
  });
};
