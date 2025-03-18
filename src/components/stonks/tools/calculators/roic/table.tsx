import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useROICResults } from "@/context/stonks/tools/calculators/roic/roic-results";

export function ROICCalculatorTable() {
    const { roicResults } = useROICResults();

    if (!roicResults.length) {
        return null;
    }

    // Calculate average ROIC
    const averageROIC =
        roicResults.reduce((acc, result) => acc + result.roic, 0) /
        roicResults.length;

    return (
        <Table className="max-w-[55%] mx-auto">
            <TableHeader>
                <TableRow>
                    <TableHead>Year</TableHead>
                    <TableHead>NOPAT ($)</TableHead>
                    <TableHead>Invested Capital ($)</TableHead>
                    <TableHead className="text-right">ROIC (%)</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {roicResults.map((result) => (
                    <TableRow key={result.year}>
                        <TableCell className="font-medium">{result.year}</TableCell>
                        <TableCell>${result.nopat.toLocaleString()}</TableCell>
                        <TableCell>${result.investedCapital.toLocaleString()}</TableCell>
                        <TableCell className="text-right">
                            {result.roic.toFixed(2)}%
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Average ROIC</TableCell>
                    <TableCell className="text-right">{averageROIC.toFixed(2)}%</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
}