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
    ReferenceLine,
} from "recharts";
import { useROICResults } from "@/context/stonks/tools/calculators/roic/roic-results";
import { getROICChart } from "@/lib/stonks/tools/calculators/roic";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

export function ROICCalculatorChart() {
    const { roicResults } = useROICResults();

    if (!roicResults.length) {
        return null;
    }

    const chartData = getROICChart(roicResults);

    const chartConfig = {
        roic: {
            label: "ROIC (%): ",
            color: "hsl(var(--chart-1))",
        },
        nopat: {
            label: "NOPAT ($): ",
            color: "hsl(var(--chart-2))",
        },
        investedCapital: {
            label: "Invested Capital ($): ",
            color: "hsl(var(--chart-3))",
        },
    } satisfies ChartConfig;

    // Calculate WACC (for example, let's use 8% as a standard benchmark)
    const wacc = 8;

    return (
        <Card className="h-fit">
            <CardHeader>
                <CardTitle>ROIC Projection</CardTitle>
                <CardDescription>ROIC vs Time</CardDescription>
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
                        <YAxis
                            yAxisId="left"
                            orientation="left"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => `${value}%`}
                        />
                        <YAxis
                            yAxisId="right"
                            orientation="right"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <Line
                            dataKey="roic"
                            type="monotone"
                            stroke="var(--color-roic)"
                            strokeWidth={2}
                            dot={false}
                            yAxisId="left"
                        />
                        <Line
                            dataKey="nopat"
                            type="monotone"
                            stroke="var(--color-nopat)"
                            strokeWidth={2}
                            dot={false}
                            yAxisId="right"
                        />
                        <Line
                            dataKey="investedCapital"
                            type="monotone"
                            stroke="var(--color-investedCapital)"
                            strokeWidth={2}
                            dot={false}
                            yAxisId="right"
                        />
                        <ReferenceLine
                            y={wacc}
                            yAxisId="left"
                            stroke="red"
                            strokeDasharray="3 3"
                            label={{ value: "WACC (8%)", position: "right", fill: "red" }}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex justify-center">
        <span className="text-sm text-muted-foreground">
          ROIC projection over a {roicResults.length} year period
        </span>
            </CardFooter>
        </Card>
    );
}