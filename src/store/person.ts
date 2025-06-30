import { create, StateCreator } from "zustand";
import { devtools, persist } from 'zustand/middleware'

export interface PersonStore {
  name: string;
  setName: (name: string) => void;
}

export const personStore = create<PersonStore>()(
  devtools(
    persist(
      (set) => ({
        name: "",
        setName: (name: string) => set((state) => ({ name: name })),
      }),
      { name: 'personStore' }
    )
  )
)