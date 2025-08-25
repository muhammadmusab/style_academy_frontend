import { Role } from "@/types/general";
import { serviceInstance } from "../instances/service-instance";

export const getProfile = async (role: Role = Role.CUSTOMER) => {
  try {
    const response: any = await serviceInstance.get(
      `/auth/get-profile?role=${role}`,
      {
        next: { tags: ["get-profile"], revalidate: 60 }, // revalidate every 60 seconds
      }
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching profile:", error);
    return null; // or handle the error as needed
  }
};
