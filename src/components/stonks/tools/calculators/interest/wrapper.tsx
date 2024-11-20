"use client";

import { YearResultsProvider } from "@/context/stonks/tools/calculators/interest/year-results";
import InterestCalculator from "./form";
import { InterestCalculatorChart } from "./chart";
import { InterestCalculatorTable } from "./table";

export default function InterestCalculatorWrapper() {
  return (
    <YearResultsProvider>
      <div className="flex flex-col gap-8">
        <div className="flex flex-1 flex-row justify-center gap-8 max-h-fit pr-2 flex-wrap">
          <InterestCalculator />
          <InterestCalculatorChart />
        </div>
        <div className="flex flex-1 justify-center max-h-fit pr-2">
          <InterestCalculatorTable />
        </div>
      </div>
    </YearResultsProvider>
  );
}
