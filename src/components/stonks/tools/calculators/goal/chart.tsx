import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useGoalResults } from "@/context/stonks/tools/calculators/goal/goal-results";
import { getCompoundInterestChart } from "@/lib/stonks/tools/calculators/interest";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export function GoalCalculatorChart() {
  const { goalResults } = useGoalResults();

  if (!goalResults.length) {
    return null;
  }

  const chartData = getCompoundInterestChart(goalResults);

  const chartConfig = {
    totalInvestment: {
      label: "Invested: ",
      color: "hsl(var(--chart-1))",
    },
    totalInterest: {
      label: "Interest: ",
      color: "hsl(var(--chart-2))",
    },
    total: {
      label: "Final Amount: ",
      color: "hsl(var(--chart-3))",
    },
  } satisfies ChartConfig;

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Goal Projection</CardTitle>
        <CardDescription>Growth projection until goal amount</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[275px] w-[425px]">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="totalInvestment"
              type="monotone"
              stroke="var(--color-totalInvestment)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="totalInterest"
              type="monotone"
              stroke="var(--color-totalInterest)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="total"
              type="monotone"
              stroke="var(--color-total)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex justify-center">
        <span className="text-sm text-muted-foreground">
          Goal will be reached in a {goalResults.length} year period
        </span>
      </CardFooter>
    </Card>
  );
}
