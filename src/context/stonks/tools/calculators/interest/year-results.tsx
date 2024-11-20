"use client";

import { createContext, useContext, useState } from "react";
import type { YearResult } from "../../../../../types/stonks/tools/calculators/interest";

interface YearResultsContextType {
  yearResults: YearResult[];
  setYearResults: (results: YearResult[]) => void;
}

const YearResultsContext = createContext<YearResultsContextType>({
  yearResults: [],
  setYearResults: () => {},
});

export function YearResultsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [yearResults, setYearResults] = useState<YearResult[]>([]);

  return (
    <YearResultsContext.Provider value={{ yearResults, setYearResults }}>
      {children}
    </YearResultsContext.Provider>
  );
}

export function useYearResults() {
  const context = useContext(YearResultsContext);
  if (!context) {
    throw new Error("useYearResults must be used within a YearResultsProvider");
  }
  return context;
}
