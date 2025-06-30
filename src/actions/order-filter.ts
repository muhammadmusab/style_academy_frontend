"use server";
interface orderFilterState {
  status: string;
  time: string;
}
export async function createOrderFilter(
  formData: FormData
): Promise<orderFilterState> {
  // return formData
  return {
    status: formData.get("status") as string,
    time: formData.get("time") as string,
  };
}
