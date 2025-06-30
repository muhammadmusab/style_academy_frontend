"use server";
interface trackOrderState {
  orderId: string;
}
export async function trackOrder(formData: FormData): Promise<trackOrderState> {
  console.log("data", formData);

  // return formData
  return {
    orderId: formData.get("orderId") as string,
  };
}
