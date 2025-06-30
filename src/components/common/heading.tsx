import React from "react";
interface Props {
  heading: string;
  subheading: string;
  containerClass?: string;
  subheadingClass?: string;
}
const Heading = ({
  heading,
  subheading,
  containerClass,
  subheadingClass,
}: Props) => {
  return (
    <div
      className={`relative font-roboto font-bold uppercase text-primary ${containerClass} md:text-center`}
    >
      <h1 className="text-[30px] lg:text-[25px] sm:text-[20px]">{heading}</h1>
      <p
        className={`${
          subheadingClass
            ? subheadingClass
            : "absolute top-[-25px] md:top-[-15px] sm:top-[-10px] left-[203px] sm:left-[175px] z-50 text-[60px] lg:text-[50px] md:text-[20px]  opacity-[0.1] md:static md:opacity-[0.4] "
        } mb-0`}
      >
        {subheading}
      </p>
    </div>
  );
};

export default Heading;
