"use client";

import { FIREResultsProvider } from "@/context/stonks/tools/calculators/fire/fire-results";
import FIRECalculator from "./form";
import { FIRECalculatorChart } from "./chart";
import { FIRECalculatorTable } from "./table";

export default function FIRECalculatorWrapper() {
    return (
        <FIREResultsProvider>
            <div className="flex flex-col gap-8">
                <div className="flex flex-1 flex-row justify-center gap-8 max-h-fit pr-2 flex-wrap">
                    <FIRECalculator />
                    <FIRECalculatorChart />
                </div>
                <div className="flex flex-1 justify-center max-h-fit pr-2">
                    <FIRECalculatorTable />
                </div>
            </div>
        </FIREResultsProvider>
    );
}