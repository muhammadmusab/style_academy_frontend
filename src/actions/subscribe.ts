"use server";
interface subscribeState {
  email: string;

}
export async function subscribe(formData: FormData): Promise<subscribeState> {
  console.log("data", formData);

  // return formData
  return {
    email: formData.get("email") as string,
  };
}
