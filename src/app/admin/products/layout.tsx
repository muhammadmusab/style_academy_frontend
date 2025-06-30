import React from "react";

const Layout = ({
  children,
  productModal,
}: {
  children: React.ReactNode;
  productModal: React.ReactNode;
}) => {
  return (
    <>
      {children}
      {productModal}
    </>
  );
};

export default Layout;
