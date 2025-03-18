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
    XAxis,
    YAxis,
    ReferenceLine,
    Area,
    AreaChart,
} from "recharts";
import { useFIREResults } from "@/context/stonks/tools/calculators/fire/fire-results";
import { getFIREChart } from "@/lib/stonks/tools/calculators/fire";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

export function FIRECalculatorChart() {
    const { fireResults } = useFIREResults();

    if (!fireResults.length) {
        return null;
    }

    const chartData = getFIREChart(fireResults);

    // Find the first year of financial independence, if any
    const fireYear = fireResults.findIndex(result => result.isFinanciallyIndependent);
    const fireAge = fireYear !== -1 ? fireResults[fireYear].age : null;

    const chartConfig = {
        portfolioValue: {
            label: "Portfolio: ",
            color: "hsl(var(--chart-1))",
        },
        targetValue: {
            label: "Target: ",
            color: "hsl(var(--chart-2))",
        },
    } satisfies ChartConfig;

    return (
        <Card className="h-fit">
            <CardHeader>
                <CardTitle>FIRE Projection</CardTitle>
                <CardDescription>Portfolio Growth Over Time</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-[275px] w-[425px]">
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                            top: 20,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="age"
                            label={{ value: 'Age', position: 'insideBottom', offset: -5 }}
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                        />
                        <YAxis
                            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <Area
                            type="monotone"
                            dataKey="portfolioValue"
                            stroke="var(--color-portfolioValue)"
                            fill="var(--color-portfolioValue)"
                            fillOpacity={0.2}
                            strokeWidth={2}
                        />
                        <Line
                            type="monotone"
                            dataKey="targetValue"
                            stroke="var(--color-targetValue)"
                            strokeWidth={2}
                            strokeDasharray="5 5"
                            dot={false}
                        />
                        {fireYear !== -1 && (
                            <ReferenceLine
                                x={fireAge ?? undefined}
                                stroke="green"
                                strokeWidth={2}
                                label={{ value: 'FIRE!', position: 'top', fill: 'green' }}
                            />
                        )}
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex justify-center">
        <span className="text-sm text-muted-foreground">
          {fireYear !== -1
              ? `Financial independence achieved at age ${fireAge}`
              : 'Projected portfolio growth over time'}
        </span>
            </CardFooter>
        </Card>
    );
}