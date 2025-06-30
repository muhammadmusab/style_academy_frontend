"use client";
import Image from "next/image";
export default function ({
    error,
    reset,
  }: {
    error: Error & { digest?: string }
    reset: () => void
  }) {
  return (
    <div className=" py-5 flex flex-col justify-center items-center">
      <h1 className="font-bold">Oops, Something went wrong</h1>
      
      <Image src={"/error.png"} width={597} height={525} alt="404" />
      <button
       className="transition-all bg-primary font-roboto font-bold text-white py-4 px-[65px] md:px-[30px] hover:bg-primary-foreground"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
};
