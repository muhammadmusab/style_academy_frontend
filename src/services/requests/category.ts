import { serviceInstance } from "../instances/service-instance";
import qs from "qs";
export async function listCategories(config?: any) {
  const queryParams = qs.stringify(config ?? {}, {
    addQueryPrefix: true,
  });
  try {
    // serviceInstance.baseURL = "http://localhost:4000";
    let url = `/categories${queryParams}`;
    if (!queryParams || !queryParams.length) {
      url = `/categories`;
    }
    const data = await serviceInstance.get<any>(url, {
      next: { tags: ["list-categories"] },
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