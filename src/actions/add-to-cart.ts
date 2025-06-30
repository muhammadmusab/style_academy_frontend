"use server";
interface AddToCartState {
  size: string;
  color: string;
  quantity: number;
}
export async function AddToCart(formData: FormData): Promise<AddToCartState> {
  console.log("data", formData);

  // return formData
  return {
    size: formData.get("size") as string,
    color: formData.get("color") as string,
    quantity: parseInt(formData.get("quantity") as string) as number,
  };
}
