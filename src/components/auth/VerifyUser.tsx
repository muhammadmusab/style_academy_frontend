import { authInstance } from "@/services/instances/auth-instance";
import { redirect } from "next/navigation";


const verifyUser = async (token: string) => {
  let redirectUrl = "";
  try {
    if (!token) {
      throw new Error("There was a problem verifying the email");
    }
    await authInstance.get(`/auth/verify-email?token=${token}`, {
      cache: "no-store", // don't cache request, by default it is 'force-cache'
    });
    redirectUrl = "/post-confirmation";
  } catch (error: any) {
    if (error.status === 422) {
      redirectUrl = "/verification/failed?";
    }
  } finally {
    if (redirectUrl) {
      redirect(redirectUrl);
    }
  }
};
// we can use async/await in server component
export const VerifyUser = async ({ token }: { token: string }) => {
  await verifyUser(token);
  return <div></div>;
};
