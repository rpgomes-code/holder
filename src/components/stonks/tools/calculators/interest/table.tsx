import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useYearResults } from "@/context/stonks/tools/calculators/interest/year-results";

export function InterestCalculatorTable() {
  const { yearResults } = useYearResults();

  if (!yearResults.length) {
    return null;
  }

  return (
    <Table className="max-w-[55%] mx-auto">
      <TableHeader>
        <TableRow>
          <TableHead>Year</TableHead>
          <TableHead>Initial Amount</TableHead>
          <TableHead>Contribution</TableHead>
          <TableHead>Interest</TableHead>
          <TableHead className="text-right">Total Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {yearResults.map((yearResult) => (
          <TableRow key={yearResult.year}>
            <TableCell className="font-medium">{yearResult.year}</TableCell>
            <TableCell>${yearResult.initialAmount.toLocaleString()}</TableCell>
            <TableCell>${yearResult.contribution.toLocaleString()}</TableCell>
            <TableCell>${yearResult.interest.toLocaleString()}</TableCell>
            <TableCell className="text-right">
              ${yearResult.totalAmount.toLocaleString()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Final Amount</TableCell>
          <TableCell className="text-right">
            ${yearResults[yearResults.length - 1].totalAmount.toLocaleString()}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
