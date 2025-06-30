import { serviceInstance } from "../instances/service-instance";
import { TListConfig } from "@/types/general";
import qs from "qs";
import { FetchOptions } from "../http.service";
export async function listAttributes(
  config?: TListConfig,
  options: FetchOptions = {}
) {
  const queryParams = qs.stringify(config ?? {}, {
    addQueryPrefix: true,
  });

  try {
    const data = await serviceInstance.get<any>(
      `/attribute/list${queryParams}`,
      {
        next: { tags: ["list-attributes"] },
        cache: "force-cache",
        headers: {},
        credentials: "omit",
        ...options,
      }
    );
    // return data;
     return [
      {
        title: "size",
        uuid: "b802bsiz-2b7e-424f-b038-e6f5314e394b",
      },
      {
        title: "color",
        uuid: "b802bcol-2b7e-424f-b038-e6f5314e394b",
      },
    ];
  } catch (error) {
    console.log(error);
    // throw new Error(error.message)
  }
}

export async function listAttributeOptions(
  config?: TListConfig,
  options: FetchOptions = {}
) {
  const queryParams = qs.stringify(config ?? {}, {
    addQueryPrefix: true,
  });

  try {
    const data = await serviceInstance.get<any>(`/option/list${queryParams}`, {
      next: { tags: ["list-attribute-options"] },
      cache: "force-cache",
      headers: {},
      credentials: "omit",
      ...options,
    });
    return data;
   
  } catch (error) {
    console.log(error);
    // throw new Error(error.message)
  }
}
