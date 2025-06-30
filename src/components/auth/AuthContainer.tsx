
import { Heading } from "@/components/ui/heading";
import React from "react";
import { Card } from "../ui/card";

type TAuthContainerProps = {
  title: React.ReactNode;
  children: React.ReactNode;
};

export const AuthContainer = ({ title, children }: TAuthContainerProps) => {
  return (
    <Card className="max-w-2xl mx-auto" applyShadow level={3}>
      <Heading level={3}>{title}</Heading>
      {children}
    </Card>
  );
};
