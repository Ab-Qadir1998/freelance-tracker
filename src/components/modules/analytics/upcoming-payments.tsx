import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  upcomingPayments,
  PaymentStatusType,
} from "@/core/mock/analytics.mock";

const statusVariantMap: Record<
  PaymentStatusType,
  "success" | "warning" | "destructive"
> = {
  Paid: "success",
  Pending: "warning",
  Overdue: "destructive",
};

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function UpcomingPaymentsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Payments</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Client</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {upcomingPayments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell className="font-medium">
                  {payment.clientName}
                </TableCell>
                <TableCell>{formatDate(payment.dueDate)}</TableCell>
                <TableCell className="text-right">
                  ${payment.amount.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  <Badge
                    variant={statusVariantMap[payment.status]}
                    className="capitalize"
                  >
                    {payment.status.toLowerCase()}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

