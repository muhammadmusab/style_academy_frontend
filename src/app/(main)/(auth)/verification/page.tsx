import React, { Suspense } from "react";

import { TPageProps } from "@/types/general";
import { VerifyUser } from "@/components/auth/VerifyUser";
import { Loader } from "@/components/ui/loader";
import { Text } from "@/components/ui/text";
import { AuthContainer } from "@/components/auth/AuthContainer";

// Use this
const page = async ({ searchParams }: TPageProps) => {
  const token = searchParams?.token?.toString() ?? "";
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <AuthContainer title="Verifying your account...">
        <Text className=" font-normal" level={1}>
          You will be redirected shortly if verification is successful.
        </Text>

        <Suspense
          fallback={<Loader variant="primary" className="w-10 h-10 mx-auto" />}
        >
          <VerifyUser token={token} />
        </Suspense>
      </AuthContainer>
    </div>
  );
};
export default page;
