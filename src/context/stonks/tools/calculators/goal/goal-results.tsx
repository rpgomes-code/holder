"use client";

import { createContext, useContext, useState } from "react";
import type { GoalResult } from "@/types/stonks/tools/calculators/goal";

interface GoalResultsContextType {
  goalResults: GoalResult[];
  setGoalResults: (results: GoalResult[]) => void;
}

const GoalResultsContext = createContext<GoalResultsContextType>({
  goalResults: [],
  setGoalResults: () => {},
});

export function GoalResultsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [goalResults, setGoalResults] = useState<GoalResult[]>([]);

  return (
    <GoalResultsContext.Provider value={{ goalResults, setGoalResults }}>
      {children}
    </GoalResultsContext.Provider>
  );
}

export function useGoalResults() {
  const context = useContext(GoalResultsContext);
  if (!context) {
    throw new Error("useGoalResults must be used within a GoalResultsProvider");
  }
  return context;
}
