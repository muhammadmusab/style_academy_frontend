import { shimmer, toBase64 } from "@/components/ui/shimmer";
import { cn } from "@/lib/utils";
import NextImage, { ImageProps } from "next/image";
import { forwardRef } from "react";

export interface IImageProps extends ImageProps {
  containerClassName?: string;
  responsive?: boolean;
}

export const Image = forwardRef<HTMLImageElement, IImageProps>(
  (
    {
      priority,
      responsive = true,
      className = "",
      containerClassName = "",
      width,
      height,
      ...rest
    },
    ref
  ) => {
    const containerClasses = cn("w-full relative", containerClassName);
    const imgClasses = cn(
      "object-contain !w-full !relative h-[unset]",
      className
    );
    return responsive ? (
      <div className={containerClasses}>
        <NextImage
          placeholder={`data:image/svg+xml;base64,${toBase64(
            shimmer(width ? +width : 300, height ? +height : 300)
          )}`}
          className={imgClasses}
          width={width}
          height={height}
          fill
          ref={ref}
          {...rest}
        />
      </div>
    ) : (
      <NextImage
        placeholder={`data:image/svg+xml;base64,${toBase64(
          shimmer(width ? +width : 300, height ? +height : 300)
        )}`}
        width={width}
        height={height}
        className={className}
        ref={ref}
        {...rest}
      />
    );
  }
);

Image.displayName = "Image";
