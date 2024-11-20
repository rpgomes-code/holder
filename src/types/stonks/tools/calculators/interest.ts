export interface YearResult {
  year: number;
  initialAmount: number;
  contribution: number;
  interest: number;
  totalAmount: number;
}

export interface CalculatorInput {
  initialAmount: number;
  annualPercentage: number;
  timePeriod: number;
  contributionAmount: number;
  contributionInterval: "daily" | "weekly" | "monthly" | "yearly";
}
