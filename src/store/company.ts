import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface CompanyStore {
  name: string;
  setName: (name: string) => void;
}

export const companyStore = create<CompanyStore>()(
  devtools(
    persist(
      (set) => ({
        name: "example-company",
        setName: (name: string) => set((state) => ({ name: name })),
      }),
      { name: "companyStore" }
    )
  )
);
