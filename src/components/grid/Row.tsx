import { cn } from "@/lib/utils";
import { fixedForwardRef } from "@/lib/forwardRef";

type TRowProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
  };

const _Row = <T extends React.ElementType = "div">(
  { as, className, children }: TRowProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const Comp = as || "div";
  return (
    <Comp
      ref={ref}
      className={cn(
        "[&>*]:w-full [&>*]:flex-shrink-0 [&>*]:max-w-full",
        "flex",
        "flex-wrap",
        "row-gap",
        className
      )}
    >
      {children}
    </Comp>
  );
};

const Row = fixedForwardRef(_Row);

export { Row, type TRowProps };
