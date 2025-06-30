import { create, StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";

type Filter = { value: string; name: string };
export interface FilterStore {
  view: "list" | "grid";
  categories: any[];
  brands: any[];
  isOpenFilterDesktop: boolean;
  isOpenFilterMobile: boolean;
  setBrands: (brands: any) => void;
  toggleFilterDesktop: () => void;
  toggleFilterMobile: (open:boolean) => void;
  setView: () => void;
}

export const useFilterStore = create<
  FilterStore,
  [["zustand/devtools", never], ["zustand/persist", never]]
>(
  devtools(
    persist(
      (set) => ({
        view: "grid",
        categories: [],
        brands: [],
        isOpenFilterDesktop: true,
        setBrands: (brands) => set((state) => ({ brands: brands })),
        setView: () =>
          set((state) => ({ view: state.view === "grid" ? "list" : "grid" })),
        toggleFilterDesktop: () =>
          set((state) => ({
            isOpenFilterDesktop: !state.isOpenFilterDesktop,
          })),
        toggleFilterMobile: (open) =>
          set((state) => ({
            isOpenFilterMobile: state.isOpenFilterMobile=open,
          })),
      }),
      { name: "filterStore" }
    )
  )
);

// export const useFilterStore = create<
//   FilterStore,
//   [["zustand/devtools", never], ["zustand/persist", never]]
// >(
//   devtools(
//     persist(
//       (set) => ({
//         filters: [],
//         setFilter: (filter) =>
//           set((state) => {
//             let filterArray = [...state.filters];
//             let foundIndex = filterArray.findIndex(
//               (item: any) => item.value == filter.value
//             );
//             if (foundIndex >= 0) {
//               filterArray.splice(foundIndex, 1);
//             } else {
//               filterArray.push(filter);
//             }
//             return { filters: [...filterArray] };
//           }),
//       }),
//       { name: "filterStore" }
//     )
//   )
// );
