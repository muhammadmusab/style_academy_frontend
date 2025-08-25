"use server";
import { setAccessToken, setRole } from "@/lib/setCookies";
import { authInstance } from "@/services/instances/auth-instance";
import { revalidateTag } from "next/cache";

// interface loginState {
//   email: string;
//   password: string;
// }

export async function login(
  data: FormData,
  config?: {
    role: "customer" | "admin";
  }
): Promise<any> {
  try {
    const { role = "customer" } = config ?? {};
    const objectData = Object.fromEntries(data.entries());
    const res: any = await authInstance.post(
      `/auth/signin?role=${role}`,
      objectData
    );
    // we have to set token manually when we have separate  B.E server instead of next.js api routes

    if (res.data) {
      setRole(res.data.role);
      setAccessToken(res.data.token);
      revalidateTag("get-profile");
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
  }
}
