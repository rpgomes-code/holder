export interface FIREResult {
    year: number;
    age: number;
    annualExpenses: number;
    annualSavings: number;
    annualReturn: number;
    portfolioValue: number;
    withdrawalRate: number;
    isFinanciallyIndependent: boolean;
}

export interface CalculatorInput {
    currentAge: number;
    currentAnnualExpenses: number;
    currentAnnualIncome: number;
    currentSavingsRate: number;
    currentPortfolioValue: number;
    expectedAnnualReturn: number;
    expectedInflation: number;
    safeWithdrawalRate: number;
}