import type {
    CalculatorInput,
    ROICResult,
} from "@/types/stonks/tools/calculators/roic";

interface ChartData {
    year: string;
    nopat: number;
    investedCapital: number;
    roic: number;
}

export function calculateROIC(input: CalculatorInput): ROICResult[] {
    const results: ROICResult[] = [];

    let currentNopat = input.initialNopat;
    let currentInvestedCapital = input.initialInvestedCapital;

    for (let year = 1; year <= input.timePeriod; year++) {
        // Calculate ROIC for current year
        const roic = (currentNopat / currentInvestedCapital) * 100;

        // Store the results for this year
        results.push({
            year,
            nopat: currentNopat,
            investedCapital: currentInvestedCapital,
            roic,
        });

        // Update for next year
        currentNopat *= (1 + input.nopatGrowthRate / 100);
        currentInvestedCapital *= (1 + input.investedCapitalGrowthRate / 100);
    }

    return results;
}

export function getROICChart(roicResults: ROICResult[]): ChartData[] {
    return roicResults.map((result) => ({
        year: `${result.year}`,
        nopat: result.nopat,
        investedCapital: result.investedCapital,
        roic: result.roic,
    }));
}