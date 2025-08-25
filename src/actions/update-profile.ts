"use server";

import { serviceInstance } from "@/services/instances/service-instance";
import { revalidateTag } from "next/cache";

interface updateProfileState {
  email: string;
  name: string;
  mobile: number | string;
  gender: string;
  dateOfBirth: string;
  location: string;
}
export async function updateProfile(data: FormData): Promise<any> {
  try {
    const objectData = Object.fromEntries(data.entries());
    
    const res: any = await serviceInstance.patch(
      "/customer/update",
      objectData,
      {
        next: { tags: ["customer-update-profile"] },
      }
    );
    if(res.data){
       revalidateTag("get-profile");
    }
    return {
      success: true,
      data: res.data,
    };
  } catch (error: any) {
    return {
      success: false,
      data: error.message,
    };
  }
}
