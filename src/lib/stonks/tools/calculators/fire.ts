import type {
    CalculatorInput,
    FIREResult,
} from "@/types/stonks/tools/calculators/fire";

interface ChartData {
    year: string;
    age: number;
    portfolioValue: number;
    targetValue: number;
}

export function calculateFIRE(input: CalculatorInput): FIREResult[] {
    const results: FIREResult[] = [];

    let currentAge = input.currentAge;
    let currentPortfolioValue = input.currentPortfolioValue;
    let currentAnnualExpenses = input.currentAnnualExpenses;
    let isFinanciallyIndependent = false;
    let yearsSinceStart = 0;

    // Calculate annual savings amount
    const annualSavings = input.currentAnnualIncome * (input.currentSavingsRate / 100);

    // Keep calculating until financially independent or 100 years (safety limit)
    while (!isFinanciallyIndependent && yearsSinceStart < 100) {
        yearsSinceStart++;
        currentAge++;

        // Adjust expenses for inflation
        if (yearsSinceStart > 1) {
            currentAnnualExpenses *= (1 + input.expectedInflation / 100);
        }

        // Calculate target portfolio value based on expenses and withdrawal rate
        const targetPortfolioValue = currentAnnualExpenses * (100 / input.safeWithdrawalRate);

        // Calculate investment returns
        const annualReturn = currentPortfolioValue * (input.expectedAnnualReturn / 100);

        // Update portfolio value
        currentPortfolioValue += annualReturn + annualSavings;

        // Check if financially independent
        isFinanciallyIndependent = currentPortfolioValue >= targetPortfolioValue;

        // Store results
        results.push({
            year: yearsSinceStart,
            age: currentAge,
            annualExpenses: currentAnnualExpenses,
            annualSavings: annualSavings,
            annualReturn: annualReturn,
            portfolioValue: currentPortfolioValue,
            withdrawalRate: (currentAnnualExpenses / currentPortfolioValue) * 100,
            isFinanciallyIndependent: isFinanciallyIndependent,
        });

        // If financially independent, we'll add one more year to show the milestone
        if (isFinanciallyIndependent && yearsSinceStart < 100) {
            break;
        }
    }

    return results;
}

export function getFIREChart(fireResults: FIREResult[]): ChartData[] {
    return fireResults.map((result) => {
        // Calculate target value based on expenses and withdrawal rate
        const targetValue = result.annualExpenses * (100 / (fireResults[0].withdrawalRate || 4));

        return {
            year: `${result.year}`,
            age: result.age,
            portfolioValue: result.portfolioValue,
            targetValue: targetValue,
        };
    });
}