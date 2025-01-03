"use client";
import { create } from "zustand";

const useStorehook = create((set) => ({
  selectedSurah: "",
  setSelectedSurah: (surah: any) => set({ selectedSurah: surah }),
}));
export default useStorehook;
