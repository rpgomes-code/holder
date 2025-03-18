import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useFIREResults } from "@/context/stonks/tools/calculators/fire/fire-results";

export function FIRECalculatorTable() {
    const { fireResults } = useFIREResults();

    if (!fireResults.length) {
        return null;
    }

    // Find the first year of financial independence, if any
    const fireYear = fireResults.findIndex(result => result.isFinanciallyIndependent);
    const fireAge = fireYear !== -1 ? fireResults[fireYear].age : null;

    // We'll display a subset of years for readability
    // Get first year, last year, and financial independence year (if achieved)
    const displayedYears = new Set<number>();

    // Add first year
    displayedYears.add(1);

    // Add FIRE year if achieved
    if (fireYear !== -1) {
        displayedYears.add(fireYear + 1);
    }

    // Add every 5th year
    for (let i = 5; i <= fireResults.length; i += 5) {
        displayedYears.add(i);
    }

    // Add last year
    displayedYears.add(fireResults.length);

    // Convert to array and sort
    const yearsToDisplay = Array.from(displayedYears).sort((a, b) => a - b);

    // Filter results to only show the selected years
    const displayResults = fireResults.filter((_, index) =>
        yearsToDisplay.includes(index + 1)
    );

    return (
        <Table className="max-w-[70%] mx-auto">
            <TableHeader>
                <TableRow>
                    <TableHead>Year</TableHead>
                    <TableHead>Age</TableHead>
                    <TableHead>Annual Expenses</TableHead>
                    <TableHead>Portfolio Value</TableHead>
                    <TableHead>Withdrawal Rate</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {displayResults.map((result) => (
                    <TableRow
                        key={result.year}
                        className={result.isFinanciallyIndependent ? "bg-green-500/10" : ""}
                    >
                        <TableCell className="font-medium">{result.year}</TableCell>
                        <TableCell>{result.age}</TableCell>
                        <TableCell>${result.annualExpenses.toLocaleString()}</TableCell>
                        <TableCell>${result.portfolioValue.toLocaleString()}</TableCell>
                        <TableCell>{result.withdrawalRate.toFixed(2)}%</TableCell>
                        <TableCell className="text-right">
                            {result.isFinanciallyIndependent
                                ? <span className="text-green-500 font-semibold">FIRE!</span>
                                : "Working"}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={5}>Financial Independence Age</TableCell>
                    <TableCell className="text-right">
                        {fireAge !== null
                            ? fireAge
                            : "Not achieved in simulation period"}
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
}