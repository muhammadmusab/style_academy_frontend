import { serviceInstance } from "../instances/service-instance";
import qs from "qs";
export async function listUsers(config?: any) {
  const queryParams = qs.stringify(config ?? {}, {
    addQueryPrefix: true,
  });
  try {
    serviceInstance.baseURL = "https://jsonplaceholder.typicode.com";
    let url = `/users${queryParams}`;
    if (!queryParams || !queryParams.length) {
      url = `/users`;
    }
    const data = await serviceInstance.get<any>(url, {
      next: { tags: ["list-users"] },
      cache: "force-cache",
      headers: {},
      credentials: "omit",
    });
    return data;
  } catch (error) {
    console.log(error);
    // throw new Error(error.message)
  }
}
