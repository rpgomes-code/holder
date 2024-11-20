"use client";

import { GoalCalculatorChart } from "./chart";
import { GoalCalculatorTable } from "./table";
import { GoalResultsProvider } from "@/context/stonks/tools/calculators/goal/goal-results";
import GoalCalculator from "./form";

export default function GoalCalculatorWrapper() {
  return (
    <GoalResultsProvider>
      <div className="flex flex-col gap-8">
        <div className="flex flex-1 flex-row justify-center gap-8 max-h-fit pr-2 flex-wrap">
          <GoalCalculator />
          <GoalCalculatorChart />
        </div>
        <div className="flex flex-1 justify-center max-h-fit pr-2">
          <GoalCalculatorTable />
        </div>
      </div>
    </GoalResultsProvider>
  );
}
