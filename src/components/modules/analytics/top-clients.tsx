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
import { topClients } from "@/core/mock/analytics.mock";

export function TopClientsTable() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Top Clients</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Client</TableHead>
              <TableHead className="text-right">Total Revenue</TableHead>
              <TableHead className="text-right">Projects</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topClients.map((client) => (
              <TableRow key={client.id}>
                <TableCell className="font-medium">
                  {client.clientName}
                </TableCell>
                <TableCell className="text-right">
                  ${client.totalRevenue.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  {client.projectsCount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

