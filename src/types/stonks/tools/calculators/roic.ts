export interface ROICResult {
    year: number;
    nopat: number;
    investedCapital: number;
    roic: number;
}

export interface CalculatorInput {
    initialNopat: number;
    initialInvestedCapital: number;
    nopatGrowthRate: number;
    investedCapitalGrowthRate: number;
    timePeriod: number;
}