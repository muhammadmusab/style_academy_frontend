"use server";
import { authInstance } from "@/services/instances/auth-instance";

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

    const response = authInstance.post(`auth/login?${role}`, objectData);

    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
