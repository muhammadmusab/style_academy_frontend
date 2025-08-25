"use server";
import { serviceInstance } from "@/services/instances/service-instance";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { ACCESS_TOKEN_COOKIE_KEY, USER_ROLE_KEY } from "@/constants";
export async function logoutAdmin(): Promise<any> {
  try {
    const res: any = await serviceInstance.get(`/auth/signout`);
    if (res.data) {
      cookies().delete(ACCESS_TOKEN_COOKIE_KEY);
      cookies().delete(USER_ROLE_KEY);
    }
    return {
      success: true,
      data: res.data,
    };
  } catch (error: any) {
    return {
      success: false,
      data: error.message,
    };
  } finally {
    revalidateTag("get-profile");
    redirect("/admin/login");
  }
}
