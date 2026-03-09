"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { paymentStatus } from "@/core/mock/analytics.mock";
import { Pie, PieChart, Cell } from "recharts";

const paymentStatusChartConfig = {
  Paid: {
    label: "Paid",
    theme: {
      light: "#10b981",
      dark: "#34d399",
    },
  },
  Pending: {
    label: "Pending",
    theme: {
      light: "#f59e0b",
      dark: "#fbbf24",
    },
  },
  Overdue: {
    label: "Overdue",
    theme: {
      light: "#ef4444",
      dark: "#fb7185",
    },
  },
} satisfies ChartConfig;

const COLORS = [
  "var(--color-Paid)",
  "var(--color-Pending)",
  "var(--color-Overdue)",
];

export function PaymentStatusChart() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Payment Status</CardTitle>
        <CardDescription>Distribution of invoices by status</CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <ChartContainer
          config={paymentStatusChartConfig}
          className="max-h-[320px] w-full"
        >
          <PieChart>
            <ChartTooltip
              content={
                <ChartTooltipContent
                  nameKey="status"
                  formatter={(value, name) => [
                    `${value}%`,
                    name as string,
                  ]}
                />
              }
            />
            <Pie
              data={paymentStatus}
              dataKey="value"
              nameKey="status"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={4}
              strokeWidth={1}
            >
              {paymentStatus.map((entry, index) => (
                <Cell
                  key={entry.status}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <ChartLegend
              verticalAlign="bottom"
              content={<ChartLegendContent nameKey="status" />}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

