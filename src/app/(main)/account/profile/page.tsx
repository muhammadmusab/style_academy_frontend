import React from "react";
import { getProfile } from "@/services/requests/get-profile";
import EditProfile from "@/components/pages/account/profile/edit-profile";



const Profile = async () => {
  const user = await getProfile();

  return(
    <EditProfile user={user}/>
  )
  
};

export default Profile;
