"use client";

import { ROICResultsProvider } from "@/context/stonks/tools/calculators/roic/roic-results";
import ROICCalculator from "./form";
import { ROICCalculatorChart } from "./chart";
import { ROICCalculatorTable } from "./table";

export default function ROICCalculatorWrapper() {
    return (
        <ROICResultsProvider>
            <div className="flex flex-col gap-8">
                <div className="flex flex-1 flex-row justify-center gap-8 max-h-fit pr-2 flex-wrap">
                    <ROICCalculator />
                    <ROICCalculatorChart />
                </div>
                <div className="flex flex-1 justify-center max-h-fit pr-2">
                    <ROICCalculatorTable />
                </div>
            </div>
        </ROICResultsProvider>
    );
}