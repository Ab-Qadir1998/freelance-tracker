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
        description: "Implement the foundation of our new design system, focusing on core components like buttons, inputs, and layouts.",
        comments: [
            { id: "c1", user: "Jane Smith", text: "Colors are still being finalized.", createdAt: "2024-03-10T10:00:00Z" },
            { id: "c2", user: "John Doe", text: "I'll start with the button set.", createdAt: "2024-03-11T14:30:00Z" }
        ],
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
        description: "Collect and analyze feedback from beta testers regarding the new multi-factor authentication flow.",
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
        description: "Finalize the swagger documentation for the v2 mobile API endpoints.",
        comments: [
            { id: "c3", user: "Alice Walker", text: "Need to clarify the auth header format.", createdAt: "2024-03-15T09:15:00Z" }
        ]
    },
    {
        id: "task-4",
        title: "Mobile App Layout Refinement",
        clientName: "Acme Corp",
        projectName: "E-Commerce Suite",
        priority: "medium",
        status: "todo",
        dueDate: "2024-04-05",
        description: "Adjust the padding and margins on the product listing page to improve mobile readability.",
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
        description: "Successfully integrated Stripe for processing monthly subscription payments.",
        comments: [
            { id: "c4", user: "Bob Builder", text: "Integration is live and tested.", createdAt: "2024-03-15T16:00:00Z" }
        ]
    },
    {
        id: "task-6",
        title: "Performance Optimization",
        clientName: "ScaleUp",
        projectName: "Data Pipeline",
        priority: "high",
        status: "in-progress",
        description: "Reducing database query times for the main activity feed by adding necessary indices and optimizing JOINs.",
        dueDate: "2024-03-30",
        assignee: {
            name: "Jane Smith",
            avatar: "https://github.com/shadcn.png"
        }
    }
];
