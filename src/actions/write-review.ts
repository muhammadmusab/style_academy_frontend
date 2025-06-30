"use server";
interface commentState {
  email: string;
  name: string;
  rating: number | string;
  title: string;
  body: string;
}
export async function createComment(formData: FormData): Promise<commentState> {
  console.log("data", formData);

  // return formData
  return {
    email: formData.get("email") as string,
    name: formData.get("name") as string,
    rating: formData.get("rating")?.toString() as string,
    title: formData.get("title") as string,
    body: formData.get("body") as string,
  };
}
