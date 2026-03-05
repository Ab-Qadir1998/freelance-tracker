export type PaymentStatus = "paid" | "pending" | "overdue";

export type PaymentsInterface = {
    id: string;
    clientId: string;
    projectId: string;
    amount: number;
    status: PaymentStatus;
    dueDate: string;
    paidAt?: string;
};

export const paymentsData: PaymentsInterface[] = [
    {
        id: "pay1",
        clientId: "1",
        projectId: "p1",
        amount: 2500,
        status: "paid",
        dueDate: "2026-02-01",
        paidAt: "2026-01-30",
    },
    {
        id: "pay2",
        clientId: "1",
        projectId: "p1",
        amount: 2500,
        status: "pending",
        dueDate: "2026-03-30",
    },
    {
        id: "pay3",
        clientId: "1",
        projectId: "p2",
        amount: 1500,
        status: "overdue",
        dueDate: "2026-02-28",
    },
    {
        id: "pay4",
        clientId: "1",
        projectId: "p2",
        amount: 1500,
        status: "pending",
        dueDate: "2026-04-15",
    },
    {
        id: "pay5",
        clientId: "1",
        projectId: "p3",
        amount: 1000,
        status: "paid",
        dueDate: "2026-01-15",
        paidAt: "2026-01-14",
    },
    {
        id: "pay6",
        clientId: "2",
        projectId: "p4",
        amount: 1500,
        status: "paid",
        dueDate: "2026-01-20",
        paidAt: "2026-01-19",
    },
    {
        id: "pay7",
        clientId: "2",
        projectId: "p5",
        amount: 300,
        status: "paid",
        dueDate: "2026-02-15",
        paidAt: "2026-02-14",
    },
    {
        id: "pay8",
        clientId: "2",
        projectId: "p5",
        amount: 600,
        status: "pending",
        dueDate: "2026-03-25",
    },
    {
        id: "pay9",
        clientId: "3",
        projectId: "p6",
        amount: 2000,
        status: "paid",
        dueDate: "2026-02-10",
        paidAt: "2026-02-09",
    },
    {
        id: "pay10",
        clientId: "3",
        projectId: "p6",
        amount: 2000,
        status: "overdue",
        dueDate: "2026-03-01",
    },
    {
        id: "pay11",
        clientId: "3",
        projectId: "p6",
        amount: 2000,
        status: "pending",
        dueDate: "2026-04-10",
    },
    {
        id: "pay12",
        clientId: "4",
        projectId: "p7",
        amount: 750,
        status: "paid",
        dueDate: "2025-12-31",
        paidAt: "2025-12-29",
    },
    {
        id: "pay13",
        clientId: "5",
        projectId: "p8",
        amount: 1000,
        status: "paid",
        dueDate: "2026-02-20",
        paidAt: "2026-02-18",
    },
    {
        id: "pay14",
        clientId: "5",
        projectId: "p8",
        amount: 1000,
        status: "pending",
        dueDate: "2026-03-28",
    },
    {
        id: "pay15",
        clientId: "6",
        projectId: "p10",
        amount: 450,
        status: "paid",
        dueDate: "2026-02-25",
        paidAt: "2026-02-24",
    },
    {
        id: "pay16",
        clientId: "6",
        projectId: "p10",
        amount: 450,
        status: "overdue",
        dueDate: "2026-03-03",
    },
];
