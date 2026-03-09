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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { taskProductivity } from "@/core/mock/analytics.mock";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const productivityChartConfig = {
  completed: {
    label: "Tasks Completed",
    theme: {
      light: "#8b5cf6",
      dark: "#a78bfa",
    },
  },
} satisfies ChartConfig;

export function TaskProductivityChart() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Task Productivity</CardTitle>
        <CardDescription>
          Tasks completed per day over the last week
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={productivityChartConfig}
          className="max-h-[260px] w-full"
        >
          <BarChart
            data={taskProductivity}
            margin={{ left: -18, right: 8, top: 8 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              allowDecimals={false}
            />
            <ChartTooltip
              cursor={{ fill: "hsl(var(--muted))" }}
              content={
                <ChartTooltipContent
                  formatter={(value) => `${value} tasks`}
                />
              }
            />
            <Bar
              dataKey="completed"
              radius={[4, 4, 0, 0]}
              fill="var(--color-completed)"
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

