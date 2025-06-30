import Breadcrumbs from "@/components/common/breadcrumbs";
import Menu from "@/components/pages/account/menu";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Breadcrumbs />
      <div className="container-fluid">
        <div className="flex justify-between items-start flex-wrap">
          <Menu className="basis-[25%] max-w-[25%] md:basis-[100%] md:max-w-[100%] h-auto" />
          <div className="basis-[73%] max-w-[73%] md:basis-[100%] md:max-w-[100%] md:mt-[50px]">
            {children}
          </div>
        </div>
      <div className="spacer"></div>
      </div>
    </div>
  );
};

export default layout;
