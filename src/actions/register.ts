"use server";
import { authInstance } from "@/services/instances/auth-instance";

// REMEMBER: fetch requests are not cached when: Used inside a Server Action. Because we don't need caching here anyways
export async function register(
  data: FormData,
  config?: {
    role: "customer" | "admin";
  }
): Promise<any> {
  try {
    const { role = "customer" } = config ?? {};
    const objectData = Object.fromEntries(data.entries());

    const res: any = await authInstance.post(
      `/auth/register?role=${role}`,
      objectData
    );

    return {
      success: true,
      data: res,
    };
  } catch (error: any) {
    return {
      success: false,
      data: error.message,
    };
  }
}
