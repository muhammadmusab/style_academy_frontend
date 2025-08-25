import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

const useFilter = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams as any);
  const createQueryString = useCallback(
    (name: string, value: string) => {
      if (name === "category") {
        if (!value) params.delete(name);
        else {
          params.set(name, value);
        }
      } 

      return params.toString();
    },
    [searchParams]
  );

  return {
    createQueryString,
  };
};

export default useFilter;
