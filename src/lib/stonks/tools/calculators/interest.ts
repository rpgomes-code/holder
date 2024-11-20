import type {
  CalculatorInput,
  YearResult,
} from "@/types/stonks/tools/calculators/interest";
import { formatCurrency } from "@/lib/general/format";

interface ChartData {
  year: string;
  totalInvestment: number;
  totalInterest: number;
  total: number;
}

export function calculateCompoundInterest(
  input: CalculatorInput
): YearResult[] {
  const results: YearResult[] = [];
  let currentAmount = input.initialAmount;

  const contributionsPerYear = {
    daily: 365,
    weekly: 52,
    monthly: 12,
    yearly: 1,
  };

  const contributionPerPeriod = input.contributionAmount;
  const periodsPerYear = contributionsPerYear[input.contributionInterval];

  for (let year = 1; year <= input.timePeriod; year++) {
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
  }

  return results;
}

export function getCompoundInterestChart(
  yearResults: YearResult[]
): ChartData[] {
  let totalInvestment = yearResults[0].initialAmount;
  let totalInterest = 0;
  let totalYearAmount = 0;
  let chartData: ChartData[] = [];

  for (let i = 0; i < yearResults.length; i++) {
    totalInvestment += yearResults[i].contribution;
    totalInterest += yearResults[i].interest;
    totalYearAmount = yearResults[i].totalAmount;

    chartData.push({
      year: `${yearResults[i].year}`,
      totalInvestment,
      totalInterest,
      total: totalYearAmount,
    });
  }

  return chartData;
}
