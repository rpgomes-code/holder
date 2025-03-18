import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Calculator } from "lucide-react";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import { useROICResults } from "@/context/stonks/tools/calculators/roic/roic-results";
import { save } from "@/actions/stonks/tools/calculators/roic/save";
import { calculateROIC } from "@/lib/stonks/tools/calculators/roic";

// Define the raw form schema (what the form actually handles)
const formSchema = z.object({
    initialNopat: z.string(),
    initialInvestedCapital: z.string(),
    nopatGrowthRate: z.string(),
    investedCapitalGrowthRate: z.string(),
    timePeriod: z.string(),
});

// Define the parsed schema (what gets submitted)
const parsedSchema = z.object({
    initialNopat: z
        .number()
        .min(0, "NOPAT must be greater than 0")
        .max(999999999, "NOPAT must be less than 999999999"),
    initialInvestedCapital: z
        .number()
        .min(0, "Invested capital must be greater than 0")
        .max(999999999, "Invested capital must be less than 999999999"),
    nopatGrowthRate: z
        .number()
        .min(-100, "NOPAT growth rate must be greater than -100")
        .max(100, "NOPAT growth rate must be less than 100"),
    investedCapitalGrowthRate: z
        .number()
        .min(-100, "Invested capital growth rate must be greater than -100")
        .max(100, "Invested capital growth rate must be less than 100"),
    timePeriod: z
        .number()
        .min(1, "Time period must be at least 1 year")
        .max(100, "Time period must be less than 100 years"),
});

type FormValues = z.infer<typeof formSchema>;
type ParsedValues = z.infer<typeof parsedSchema>;

export default function ROICCalculator() {
    const { setROICResults } = useROICResults();

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            initialNopat: "100000",
            initialInvestedCapital: "1000000",
            nopatGrowthRate: "5",
            investedCapitalGrowthRate: "3",
            timePeriod: "10",
        },
    });

    async function onSubmit(data: FormValues) {
        try {
            const numericData: ParsedValues = {
                initialNopat: Number(data.initialNopat),
                initialInvestedCapital: Number(data.initialInvestedCapital),
                nopatGrowthRate: Number(data.nopatGrowthRate),
                investedCapitalGrowthRate: Number(data.investedCapitalGrowthRate),
                timePeriod: Number(data.timePeriod),
            };

            const results = calculateROIC(numericData);
            setROICResults(results);

            toast.success("ROIC calculated", {
                description: "Your ROIC has been calculated successfully",
            });

            await save(numericData);
        } catch (error) {
            console.error(error);
            if (error instanceof z.ZodError) {
                toast.error("Validation Error", {
                    description: "Please check your input values",
                });
            } else {
                toast.error("Error", {
                    description: "An unexpected error occurred",
                });
            }
        }
    }

    return (
        <Card className="max-w-fit">
            <CardHeader>
                <CardTitle>ROIC Calculator</CardTitle>
                <CardDescription>Calculate Return on Invested Capital</CardDescription>
            </CardHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <CardContent className="flex flex-col pb-0 gap-2.5">
                        <FormField
                            control={form.control}
                            name="initialNopat"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Initial NOPAT ($)</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            inputMode="numeric"
                                            pattern="[0-9]*"
                                            placeholder="100000"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="initialInvestedCapital"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Initial Invested Capital ($)</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            inputMode="numeric"
                                            pattern="[0-9]*"
                                            placeholder="1000000"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="nopatGrowthRate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>NOPAT Growth Rate (%)</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            inputMode="numeric"
                                            placeholder="5"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="investedCapitalGrowthRate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Invested Capital Growth Rate (%)</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            inputMode="numeric"
                                            placeholder="3"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="timePeriod"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Time Period (Years)</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            inputMode="numeric"
                                            pattern="[0-9]*"
                                            placeholder="10"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                    <CardFooter className="flex justify-center">
                        <Button type="submit">
                            <Calculator className="mr-2" />
                            Calculate
                        </Button>
                    </CardFooter>
                </form>
            </Form>
        </Card>
    );
}