"use server";
import { authInstance } from "@/services/instances/auth-instance";

export async function ResendVerificationEmail(
  data: FormData,
  config: any
): Promise<any> {
  try {
    const { role = "customer" } = config ?? {};
    const objectData = Object.fromEntries(data.entries());

    const res:any = authInstance.post(
      `auth/resend-verification-mail?${role}`,
      objectData
    );

    return {
      success: true,
      data: res.data,
    };
  } catch (error: any) {
    return {
      success: false,
      data: error.message,
    };
  }
}
