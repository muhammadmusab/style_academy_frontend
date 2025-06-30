"use server";
interface productFilterState {
  status: string;
  time: string;
}
export async function createProductFilter(
  formData: FormData
): Promise<productFilterState> {
  // return formData
  return {
    status: formData.get("status") as string,
    time: formData.get("time") as string,
  };
}
