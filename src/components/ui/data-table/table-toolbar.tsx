"use client";

import useFilter from "@/hooks/useFilter";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { DebouncedInput } from "../debounce-input";
import Link from "next/link";
interface ToolBarProps {
  actionButton?: {
    className?: string;
    text: string;
    show: boolean;
  };
  RouteButton?: {
    className?: string;
    text: string;
    show: boolean;
    path: string;
  };
  searchInput: {
    placeholder?: string;
    className?: string;
    show: boolean;
  };
}
const TableToolBar = ({
  searchInput,
  actionButton,
  RouteButton,
}: ToolBarProps) => {
  const { createQueryString } = useFilter();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const onSearchInputHandler = (value: any) => {
    router.push(pathname + "?" + createQueryString("search", value), {
      scroll: false,
    });
  };
  return (
    <div className="flex justify-between items-center w-full">
      {searchInput && searchInput.show ? (
        <DebouncedInput
          type="text"
          value={searchParams.get("search") ?? ""}
          placeholder={searchInput.placeholder ?? "Search..."}
          onChange={(value) => onSearchInputHandler(value)}
          className={` mr-[10px] ${searchInput.className}`}
        />
      ) : null}
      {actionButton?.show ? (
        <button
          className={`transition-all w-[200px] text-center bg-primary text-white hover:text-white hover:bg-black py-2 px-3 ${actionButton.className}`}
        >
          {actionButton.text}
        </button>
      ) : null}
      {RouteButton?.show ? (
        <Link
          href={RouteButton.path}
          className={`transition-all w-[200px] text-center bg-primary text-white hover:text-white hover:bg-black py-2 px-3 ${RouteButton.className}`}
        >
          {RouteButton.text}
        </Link>
      ) : null}
    </div>
  );
};

export default TableToolBar;
