"use server";
interface resetPasswordtate {
  oldPassword: string;
  confirmPassword: string;
  newPassword: string;
}
export async function resetPassword(formData: FormData): Promise<resetPasswordtate> {
  console.log("data", formData);

  // return formData
  return {
    oldPassword: formData.get("oldPassword") as string,
    confirmPassword: formData.get("confirmPassword") as string,
    newPassword: formData.get("newPassword") as string,
  };
}
