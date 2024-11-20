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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

import { useGoalResults } from "@/context/stonks/tools/calculators/goal/goal-results";
import { save } from "@/actions/stonks/tools/calculators/goal/save";
import { calculateGoal } from "@/lib/stonks/tools/calculators/goal";

// Define the raw form schema (what the form actually handles)
const formSchema = z.object({
  goalAmount: z.string(),
  initialAmount: z.string(),
  annualPercentage: z.string(),
  contributionAmount: z.string(),
  contributionInterval: z.string().default("monthly"),
});

// Define the parsed schema (what gets submitted)
const parsedSchema = z.object({
  goalAmount: z
    .number()
    .min(0, "Goal amount must be greater than 0")
    .max(99999999, "Goal amount must be less than 99999999"),
  initialAmount: z
    .number()
    .min(0, "Initial amount must be greater than 0")
    .max(99999999, "Initial amount must be less than 99999999"),
  annualPercentage: z
    .number()
    .min(0, "Annual percentage must be greater than 0")
    .max(100, "Annual percentage must be less than 100"),
  contributionAmount: z
    .number()
    .min(0, "Contribution amount must be greater than 0")
    .max(99999999, "Contribution amount must be less than 99999999"),
  contributionInterval: z.enum(["daily", "weekly", "monthly", "yearly"]),
});

type FormValues = z.infer<typeof formSchema>;
type ParsedValues = z.infer<typeof parsedSchema>;

export default function GoalCalculator() {
  const { setGoalResults } = useGoalResults();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      goalAmount: "100000",
      initialAmount: "1000",
      annualPercentage: "8",
      contributionAmount: "0",
      contributionInterval: "monthly",
    },
  });

  async function onSubmit(data: FormValues) {
    try {
      const numericData: ParsedValues = {
        ...data,
        goalAmount: Number(data.goalAmount),
        initialAmount: Number(data.initialAmount),
        annualPercentage: Number(data.annualPercentage),
        contributionAmount: Number(data.contributionAmount),
      } as ParsedValues;

      const results = calculateGoal(numericData);
      setGoalResults(results);

      toast({
        variant: "success",
        title: "Goal calculated",
        description: "Your goal has been calculated successfully",
      });

      await save(numericData);
    } catch (error) {
      console.error(error);
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: "Please check your input values",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "An unexpected error occurred",
          variant: "destructive",
        });
      }
    }
  }

  return (
    <Card className="max-w-fit">
      <CardHeader>
        <CardTitle>Goal Calculator</CardTitle>
        <CardDescription>Achieve savings targets soon</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <CardContent className="flex flex-col pb-0 gap-2.5">
            <FormField
              control={form.control}
              name="goalAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Goal Amount ($)</FormLabel>
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
              name="initialAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Initial Amount ($)</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      placeholder="5000"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="annualPercentage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Annual Percentage (%)</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      placeholder="8"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className="border-0">
                <AccordionTrigger className="py-2 text-muted-foreground text-xs">
                  Contributions (Optional)
                </AccordionTrigger>
                <AccordionContent className="py-2 px-1 flex flex-col gap-4">
                  <FormField
                    control={form.control}
                    name="contributionAmount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Amount ($)</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            placeholder="500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="contributionInterval"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Interval</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="daily" />
                              </FormControl>
                              <FormLabel>Daily</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="weekly" />
                              </FormControl>
                              <FormLabel>Weekly</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="monthly" />
                              </FormControl>
                              <FormLabel>Monthly</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="yearly" />
                              </FormControl>
                              <FormLabel>Yearly</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
