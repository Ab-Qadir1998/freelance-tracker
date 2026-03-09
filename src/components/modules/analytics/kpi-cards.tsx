import { Card, CardContent } from "@/components/ui/card";
import {
  analyticsKpis,
  AnalyticsKpi,
} from "@/core/mock/analytics.mock";
import {
  DollarSign,
  Wallet,
  FolderKanban,
  CheckSquare2,
  Users,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "total-revenue": (
    <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full p-2">
      <DollarSign className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
    </div>
  ),
  "pending-payments": (
    <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full p-2">
      <Wallet className="h-4 w-4 text-amber-600 dark:text-amber-400" />
    </div>
  ),
  "active-projects": (
    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-2">
      <FolderKanban className="h-4 w-4 text-blue-600 dark:text-blue-400" />
    </div>
  ),
  "completed-tasks": (
    <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-full p-2">
      <CheckSquare2 className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
    </div>
  ),
  "total-clients": (
    <div className="bg-sky-100 dark:bg-sky-900/30 rounded-full p-2">
      <Users className="h-4 w-4 text-sky-600 dark:text-sky-400" />
    </div>
  ),
};

function formatKpiValue(kpi: AnalyticsKpi) {
  if (kpi.type === "currency") {
    return `$${kpi.value.toLocaleString()}`;
  }

  return kpi.value.toLocaleString();
}

function formatTrend(trend: number) {
  const sign = trend > 0 ? "+" : "";
  return `${sign}${trend.toFixed(1)}%`;
}

export function AnalyticsKpiCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
      {analyticsKpis.map((kpi) => {
        const isPositive = kpi.trend >= 0;

        return (
          <Card key={kpi.id}>
            <CardContent className="flex items-center justify-between gap-4 py-5">
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  {kpi.label}
                </p>
                <p className="text-2xl font-semibold">
                  {formatKpiValue(kpi)}
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                {iconMap[kpi.id]}
                <span
                  className={`text-xs font-medium ${
                    isPositive
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {formatTrend(kpi.trend)}
                </span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

