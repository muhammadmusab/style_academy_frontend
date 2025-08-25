"use server";

import { serviceInstance } from "@/services/instances/service-instance";
import { revalidateTag } from "next/cache";

export async function resetPassword(data: FormData): Promise<any> {
  try {
    const objectData = Object.fromEntries(data.entries());

    const res: any = await serviceInstance.post(
      "/auth/reset-password-profile",
      objectData,
      {
        next: { tags: ["update-reset-password"] },
      }
    );
   
    if (res.data) {
      revalidateTag("get-reset-password");
    }
    return {
      success: true,
      data: res.message,
    };
  } catch (error: any) {
    return {
      success: false,
      data: error.message,
    };
  }
  // return {
  //   oldPassword: formData.get("oldPassword") as string,
  //   confirmPassword: formData.get("confirmPassword") as string,
  //   newPassword: formData.get("newPassword") as string,
  // };
}
