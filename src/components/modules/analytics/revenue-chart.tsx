"use client";

import { FinancialActivityChart } from "@/components/modules/analytics/activity-chart";

export function RevenueChart() {
  return (
    <FinancialActivityChart
      title="Revenue Overview"
      descriptionText="Last 6 months revenue and expenses overview"
      className="h-full"
      showFooter={false}
    />
  );
}

