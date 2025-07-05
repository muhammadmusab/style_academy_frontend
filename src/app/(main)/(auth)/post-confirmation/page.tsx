import React from "react";
import { Text } from "@/components/ui/text";
import { TPageProps } from "@/types/general";
import Link from "next/link";
import { AuthContainer } from "@/components/auth/AuthContainer";

const page = ({ searchParams }: TPageProps) => {
  const title = "Account Verified";
  const text =
    "Congratulations! Your account has been verified. You can now login to your account.";

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <AuthContainer title={title}>
      <Text className="mb-2 font-normal" level={1}>
        {text}
      </Text>
    </AuthContainer>
    </div>
  );
};

export default page;
