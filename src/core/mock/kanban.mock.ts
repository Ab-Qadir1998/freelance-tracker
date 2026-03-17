import { KanbanTask, KanbanColumn } from "@/components/modules/kanban/kanban-types";

export const KANBAN_COLUMNS: KanbanColumn[] = [
    { id: "todo", title: "Todo" },
    { id: "in-progress", title: "In Progress" },
    { id: "review", title: "Review" },
    { id: "done", title: "Done" },
];

export const MOCK_KANBAN_TASKS: KanbanTask[] = [
    {
        id: "task-1",
        title: "Design System Implementation",
        clientName: "Acme Corp",
        projectName: "E-Commerce Suite",
        priority: "high",
        status: "in-progress",
        dueDate: "2024-03-25",
        assignee: {
            name: "John Doe",
            avatar: "https://github.com/shadcn.png"
        }
    },
    {
        id: "task-2",
        title: "User Authentication Feedback",
        clientName: "Global Tech",
        projectName: "SaaS Dashboard",
        priority: "medium",
        status: "todo",
        dueDate: "2024-03-28",
        assignee: {
            name: "Jane Smith",
            avatar: "https://github.com/shadcn.png"
        }
    },
    {
        id: "task-3",
        title: "API Documentation",
        clientName: "Startup Inc",
        projectName: "Mobile App App",
        priority: "low",
        status: "review",
        dueDate: "2024-03-20",
    },
    {
        id: "task-4",
        title: "Mobile App Layout Refinement",
        clientName: "Acme Corp",
        projectName: "E-Commerce Suite",
        priority: "medium",
        status: "todo",
        dueDate: "2024-04-05",
        assignee: {
            name: "John Doe",
            avatar: "https://github.com/shadcn.png"
        }
    },
    {
        id: "task-5",
        title: "Payment Gateway Integration",
        clientName: "Global Tech",
        projectName: "SaaS Dashboard",
        priority: "high",
        status: "done",
        dueDate: "2024-03-15",
    },
    {
        id: "task-6",
        title: "Performance Optimization",
        clientName: "ScaleUp",
        projectName: "Data Pipeline",
        priority: "high",
        status: "in-progress",
        dueDate: "2024-03-30",
        assignee: {
            name: "Jane Smith",
            avatar: "https://github.com/shadcn.png"
        }
    }
];
