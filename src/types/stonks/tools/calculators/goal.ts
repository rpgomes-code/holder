export interface GoalResult {
  year: number;
  initialAmount: number;
  contribution: number;
  interest: number;
  totalAmount: number;
}

export interface CalculatorInput {
  goalAmount: number;
  initialAmount: number;
  annualPercentage: number;
  contributionAmount: number;
  contributionInterval: "daily" | "weekly" | "monthly" | "yearly";
}
