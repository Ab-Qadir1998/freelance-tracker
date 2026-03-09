import Content from "@/components/layout/app-content";
import { AnalyticsKpiCards } from "@/components/modules/analytics/kpi-cards";
import { RevenueChart } from "@/components/modules/analytics/revenue-chart";
import { PaymentStatusChart } from "@/components/modules/analytics/payment-status-chart";
import { TopClientsTable } from "@/components/modules/analytics/top-clients";
import { TaskProductivityChart } from "@/components/modules/analytics/task-productivity";
import { UpcomingPaymentsTable } from "@/components/modules/analytics/upcoming-payments";

export default function Analytics() {
  return (
    <Content>
      {/* Top: KPI cards */}
      <AnalyticsKpiCards />

      {/* Middle: Revenue + Payment status */}
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div className="lg:col-span-1">
          <PaymentStatusChart />
        </div>
      </div>

      {/* Next: Top clients + productivity */}
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <TopClientsTable />
        <TaskProductivityChart />
      </div>

      {/* Bottom: Upcoming payments */}
      <div className="mt-4">
        <UpcomingPaymentsTable />
      </div>
    </Content>
  );
}

