import type {
  CalculatorInput,
  GoalResult,
} from "@/types/stonks/tools/calculators/goal";

interface ChartData {
  year: string;
  totalInvestment: number;
  totalInterest: number;
  total: number;
}

export function calculateGoal(input: CalculatorInput): GoalResult[] {
  const results: GoalResult[] = [];

  let currentAmount = input.initialAmount;

  const contributionsPerYear = {
    daily: 365,
    weekly: 52,
    monthly: 12,
    yearly: 1,
  };

  const contributionPerPeriod = input.contributionAmount;
  const periodsPerYear = contributionsPerYear[input.contributionInterval];

  for (let year = 1; year <= 999999; year++) {
    const startingAmount = currentAmount; // Store the starting amount for this year

    // Calculate and add this year's contribution
    const yearlyContribution = contributionPerPeriod * periodsPerYear;
    currentAmount += yearlyContribution;

    // Calculate interest on the total amount (principal + contributions)
    const totalInterest = currentAmount * (input.annualPercentage / 100);
    currentAmount += totalInterest;

    // Store the results for this year
    results.push({
      year,
      initialAmount: startingAmount, // Use the starting amount for this year
      contribution: yearlyContribution,
      interest: currentAmount - startingAmount - yearlyContribution,
      totalAmount: currentAmount,
    });

    if (currentAmount >= input.goalAmount) {
      break;
    }
  }
  return results;
}

export function getGoalChart(goalResults: GoalResult[]): ChartData[] {
  let totalInvestment = goalResults[0].initialAmount;
  let totalInterest = 0;
  let totalYearAmount = 0;
  let chartData: ChartData[] = [];

  for (let i = 0; i < goalResults.length; i++) {
    totalInvestment += goalResults[i].contribution;
    totalInterest += goalResults[i].interest;
    totalYearAmount = goalResults[i].totalAmount;

    chartData.push({
      year: `${goalResults[i].year}`,
      totalInvestment,
      totalInterest,
      total: totalYearAmount,
    });
  }

  return chartData;
}
