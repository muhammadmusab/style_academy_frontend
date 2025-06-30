import React from "react";

const Layout = ({
  children,
  variantModal,
}: {
  children: React.ReactNode;
  variantModal: React.ReactNode;
}) => {
  return (
    <>
      {children}
      {variantModal}
    </>
  );
};

export default Layout;
