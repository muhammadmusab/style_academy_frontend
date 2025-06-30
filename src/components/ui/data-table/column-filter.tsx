"use client";
import useFilter from "@/hooks/useFilter";
import { DebouncedInput } from "../debounce-input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// this is just example for column Filter
export function ColumnFilter({ column }: { column: any }) {
  const columnFilterValue = column.getFilterValue();
  const { filterVariant, searchInput } = column.columnDef.meta ?? {};
  const { createQueryString } = useFilter();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams as any);

  const minPrice = params.get("min-price") ? params.get("min-price") : "";
  const maxPrice = params.get("max-price") ? params.get("max-price") : "";
  const onSearchInputHandler = (key: string, value: any) => {
    router.push(pathname + "?" + createQueryString(key, value), {
      scroll: false,
    });
  };
  return filterVariant === "range" ? (
    <div>
      <div className="flex space-x-2">
        {/* See faceted column filters example for min max values functionality */}
        <DebouncedInput
          type="number"
          value={minPrice}
          onChange={(value) =>
            router.push(
              pathname + "?" + createQueryString("min-price", `${value}`),
              { scroll: false }
            )
          }
          placeholder={`Min`}
          className="w-24"
        />
        <DebouncedInput
          type="number"
          value={maxPrice}
          onChange={(value) =>
            router.push(
              pathname + "?" + createQueryString("max-price", `${value}`),
              { scroll: false }
            )
          }
          placeholder={`Max`}
          className="w-24"
        />
      </div>
      <div className="h-1" />
    </div>
  ) : filterVariant === "select" ? (
    <select
      onChange={(e) => column.setFilterValue(e.target.value)}
      value={columnFilterValue?.toString()}
    >
      {/* See faceted column filters example for dynamic select options */}
      {column?.columnDef?.meta?.options &&
        column.columnDef.meta.options.map((item: any) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
    </select>
  ) : (
    <DebouncedInput
      type="text"
      value={searchParams.get("search") ?? ""}
      placeholder={searchInput.placeholder ?? "Search..."}
      onChange={(value) => onSearchInputHandler(searchInput.key, value)}
      className={searchInput.className ?? ""}
    />
    // See faceted column filters example for datalist search suggestions
  );
}
