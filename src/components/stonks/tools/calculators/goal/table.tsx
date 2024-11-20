import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGoalResults } from "@/context/stonks/tools/calculators/goal/goal-results";

export function GoalCalculatorTable() {
  const { goalResults } = useGoalResults();

  if (!goalResults.length) {
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
        {goalResults.map((goalResult) => (
          <TableRow key={goalResult.year}>
            <TableCell className="font-medium">{goalResult.year}</TableCell>
            <TableCell>${goalResult.initialAmount.toLocaleString()}</TableCell>
            <TableCell>${goalResult.contribution.toLocaleString()}</TableCell>
            <TableCell>${goalResult.interest.toLocaleString()}</TableCell>
            <TableCell className="text-right">
              ${goalResult.totalAmount.toLocaleString()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Final Amount</TableCell>
          <TableCell className="text-right">
            ${goalResults[goalResults.length - 1].totalAmount.toLocaleString()}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
