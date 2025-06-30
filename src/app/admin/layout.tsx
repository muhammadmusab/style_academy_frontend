import Header from "@/components/admin/admin-header";
import Menu from "@/components/admin/admin-menu";
import { Fragment } from "react";
const layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Fragment>
      <Header />
      <div className="container-fluid">
        <div className="flex justify-between items-start flex-wrap">
          <Menu className="basis-[25%] max-w-[25%] md:basis-[100%] md:max-w-[100%] h-auto" />
          <div className="basis-[73%] max-w-[73%] md:basis-[100%] md:max-w-[100%] md:mt-[50px]">
            {children}
          </div>
        </div>
        <div className="spacer"></div>
      </div>
    </Fragment>
  );
};

export default layout;
