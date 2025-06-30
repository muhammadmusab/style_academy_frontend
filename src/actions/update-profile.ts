"use server";
interface updateProfileState {
  email: string;
  name: string;
  mobile: number | string;
  gender: string;
  dateOfBirth: string;
  location: string;
}
export async function updateProfile(
  formData: FormData
): Promise<updateProfileState> {
  console.log("data", formData);
  console.log('data-in-update-profile')

  // return formData
  return {
    email: formData.get("email") as string,
    name: formData.get("name") as string,
    mobile: formData.get("mobile") as string,
    gender: formData.get("gender") as string,
    location: formData.get("location") as string,
    dateOfBirth: formData.get("dateOfBirth") as string,
  };
}
