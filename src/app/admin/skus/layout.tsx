import React from "react";

const Layout = ({
  children,
  skuModal,
}: {
  children: React.ReactNode;
  skuModal: React.ReactNode;
}) => {
  return (
    <>
      {children}
      {skuModal}
    </>
  );
};

export default Layout;
