"use server";
interface addAddressState {
  name: string;
  address1: string;
  address2?: string;
  city: string;
  country: string;
  postalCode: string;
  phone: string;
}
export async function addAddress(
  formData: FormData
): Promise<addAddressState> {
  console.log("data", formData);

  // return formData
  return {
    name: formData.get("name") as string,
    address1: formData.get("address1") as string,
    address2: formData.get("address2") as string,
    city: formData.get("city") as string,
    country: formData.get("country") as string,
    postalCode: formData.get("postalCode") as string,
    phone: formData.get("phone") as string,
  };
}
