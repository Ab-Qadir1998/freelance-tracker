export type PaymentStatusType = "Paid" | "Pending" | "Overdue";

export interface AnalyticsKpi {
  id: string;
  label: string;
  /**
   * Raw numeric value for the KPI.
   * For currency values this is the amount in USD.
   */
  value: number;
  /**
   * How to display the value (plain count vs currency).
   */
  type: "currency" | "count";
  /**
   * Percentage change compared to a previous period.
   * Positive numbers mean growth (e.g. +12), negatives indicate decline.
   */
  trend: number;
}

export interface MonthlyRevenue {
  month: string;
  revenue: number;
}

export interface PaymentStatusSlice {
  status: PaymentStatusType;
  value: number;
}

export interface TopClient {
  id: number;
  clientName: string;
  totalRevenue: number;
  projectsCount: number;
}

export interface TaskProductivityPoint {
  day: string;
  completed: number;
}

export interface UpcomingPayment {
  id: number;
  clientName: string;
  amount: number;
  dueDate: string;
  status: PaymentStatusType;
}

export const analyticsKpis: AnalyticsKpi[] = [
  {
    id: "total-revenue",
    label: "Total Revenue",
    value: 84250,
    type: "currency",
    trend: 12.4,
  },
  {
    id: "pending-payments",
    label: "Pending Payments",
    value: 12680,
    type: "currency",
    trend: -4.1,
  },
  {
    id: "active-projects",
    label: "Active Projects",
    value: 18,
    type: "count",
    trend: 6.3,
  },
  {
    id: "completed-tasks",
    label: "Completed Tasks",
    value: 327,
    type: "count",
    trend: 18.9,
  },
  {
    id: "total-clients",
    label: "Total Clients",
    value: 24,
    type: "count",
    trend: 3.2,
  },
];

export const monthlyRevenue: MonthlyRevenue[] = [
  { month: "Jan", revenue: 6200 },
  { month: "Feb", revenue: 7300 },
  { month: "Mar", revenue: 6800 },
  { month: "Apr", revenue: 8200 },
  { month: "May", revenue: 9100 },
  { month: "Jun", revenue: 10400 },
  { month: "Jul", revenue: 9800 },
  { month: "Aug", revenue: 11250 },
  { month: "Sep", revenue: 11800 },
  { month: "Oct", revenue: 12400 },
  { month: "Nov", revenue: 13150 },
  { month: "Dec", revenue: 13800 },
];

export const paymentStatus: PaymentStatusSlice[] = [
  {
    status: "Paid",
    value: 68,
  },
  {
    status: "Pending",
    value: 22,
  },
  {
    status: "Overdue",
    value: 10,
  },
];

export const topClients: TopClient[] = [
  {
    id: 1,
    clientName: "Acme Corp",
    totalRevenue: 24500,
    projectsCount: 5,
  },
  {
    id: 2,
    clientName: "Brightside Studios",
    totalRevenue: 18750,
    projectsCount: 4,
  },
  {
    id: 3,
    clientName: "Nimbus Labs",
    totalRevenue: 16320,
    projectsCount: 3,
  },
  {
    id: 4,
    clientName: "Skyline Ventures",
    totalRevenue: 12980,
    projectsCount: 3,
  },
  {
    id: 5,
    clientName: "PixelWave Agency",
    totalRevenue: 10400,
    projectsCount: 2,
  },
];

export const taskProductivity: TaskProductivityPoint[] = [
  { day: "Mon", completed: 18 },
  { day: "Tue", completed: 22 },
  { day: "Wed", completed: 16 },
  { day: "Thu", completed: 25 },
  { day: "Fri", completed: 21 },
  { day: "Sat", completed: 9 },
  { day: "Sun", completed: 6 },
];

export const upcomingPayments: UpcomingPayment[] = [
  {
    id: 1,
    clientName: "Acme Corp",
    amount: 3200,
    dueDate: new Date().toISOString(),
    status: "Pending",
  },
  {
    id: 2,
    clientName: "Brightside Studios",
    amount: 1850,
    dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
    status: "Pending",
  },
  {
    id: 3,
    clientName: "Nimbus Labs",
    amount: 4200,
    dueDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    status: "Overdue",
  },
  {
    id: 4,
    clientName: "Skyline Ventures",
    amount: 2750,
    dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    status: "Pending",
  },
  {
    id: 5,
    clientName: "PixelWave Agency",
    amount: 960,
    dueDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
    status: "Paid",
  },
];

