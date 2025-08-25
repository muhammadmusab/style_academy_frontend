import { Fragment } from "react";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <div className="container-fluid h-[100vh]">
        {children}
      </div>
    </Fragment>
  );
};

export default layout;
