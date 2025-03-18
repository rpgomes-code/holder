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

import { useFIREResults } from "@/context/stonks/tools/calculators/fire/fire-results";
import { save } from "@/actions/stonks/tools/calculators/fire/save";
import { calculateFIRE } from "@/lib/stonks/tools/calculators/fire";

// Define the raw form schema
const formSchema = z.object({
    currentAge: z.string(),
    currentAnnualExpenses: z.string(),
    currentAnnualIncome: z.string(),
    currentSavingsRate: z.string(),
    currentPortfolioValue: z.string(),
    expectedAnnualReturn: z.string(),
    expectedInflation: z.string(),
    safeWithdrawalRate: z.string(),
});

// Define the parsed schema
const parsedSchema = z.object({
    currentAge: z
        .number()
        .min(18, "Age must be at least 18")
        .max(100, "Age must be less than 100"),
    currentAnnualExpenses: z
        .number()
        .min(0, "Annual expenses must be greater than 0")
        .max(10000000, "Annual expenses must be less than 10,000,000"),
    currentAnnualIncome: z
        .number()
        .min(0, "Annual income must be greater than 0")
        .max(10000000, "Annual income must be less than 10,000,000"),
    currentSavingsRate: z
        .number()
        .min(0, "Savings rate must be greater than 0")
        .max(100, "Savings rate must be less than 100"),
    currentPortfolioValue: z
        .number()
        .min(0, "Portfolio value must be greater than 0")
        .max(1000000000, "Portfolio value must be less than 1,000,000,000"),
    expectedAnnualReturn: z
        .number()
        .min(0, "Expected annual return must be greater than 0")
        .max(30, "Expected annual return must be less than 30"),
    expectedInflation: z
        .number()
        .min(0, "Expected inflation must be greater than 0")
        .max(20, "Expected inflation must be less than 20"),
    safeWithdrawalRate: z
        .number()
        .min(1, "Safe withdrawal rate must be greater than 1")
        .max(10, "Safe withdrawal rate must be less than 10"),
});

type FormValues = z.infer<typeof formSchema>;
type ParsedValues = z.infer<typeof parsedSchema>;

export default function FIRECalculator() {
    const { setFIREResults } = useFIREResults();

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            currentAge: "30",
            currentAnnualExpenses: "40000",
            currentAnnualIncome: "80000",
            currentSavingsRate: "30",
            currentPortfolioValue: "100000",
            expectedAnnualReturn: "7",
            expectedInflation: "2.5",
            safeWithdrawalRate: "4",
        },
    });

    async function onSubmit(data: FormValues) {
        try {
            const numericData: ParsedValues = {
                currentAge: Number(data.currentAge),
                currentAnnualExpenses: Number(data.currentAnnualExpenses),
                currentAnnualIncome: Number(data.currentAnnualIncome),
                currentSavingsRate: Number(data.currentSavingsRate),
                currentPortfolioValue: Number(data.currentPortfolioValue),
                expectedAnnualReturn: Number(data.expectedAnnualReturn),
                expectedInflation: Number(data.expectedInflation),
                safeWithdrawalRate: Number(data.safeWithdrawalRate),
            };

            const results = calculateFIRE(numericData);
            setFIREResults(results);

            toast.success("FIRE calculation complete", {
                description: "Your FIRE projections have been calculated successfully",
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
                <CardTitle>FIRE Calculator</CardTitle>
                <CardDescription>Financial Independence, Retire Early</CardDescription>
            </CardHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <CardContent className="flex flex-col pb-0 gap-2.5">
                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="currentAge"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Current Age</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                inputMode="numeric"
                                                pattern="[0-9]*"
                                                placeholder="30"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="currentPortfolioValue"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Current Portfolio ($)</FormLabel>
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
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="currentAnnualIncome"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Annual Income ($)</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                inputMode="numeric"
                                                pattern="[0-9]*"
                                                placeholder="80000"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="currentAnnualExpenses"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Annual Expenses ($)</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                inputMode="numeric"
                                                pattern="[0-9]*"
                                                placeholder="40000"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="currentSavingsRate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Savings Rate (%)</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                inputMode="numeric"
                                                placeholder="30"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="expectedAnnualReturn"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Expected Return (%)</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                inputMode="numeric"
                                                placeholder="7"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="expectedInflation"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Expected Inflation (%)</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                inputMode="numeric"
                                                placeholder="2.5"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="safeWithdrawalRate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Withdrawal Rate (%)</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                inputMode="numeric"
                                                placeholder="4"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
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