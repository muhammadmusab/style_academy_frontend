import React from "react";
import { Text } from "@/components/ui/text";

import { ResendVerificationForm } from "@/components/auth/ResendVerificationForm";
import { AuthContainer } from "@/components/auth/AuthContainer";

const page = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <AuthContainer title="Verification failed">
        <Text className="font-normal" level={1}>
          Account verification failed
        </Text>
        <ResendVerificationForm />
      </AuthContainer>
    </div>
  );
};
export default page;
