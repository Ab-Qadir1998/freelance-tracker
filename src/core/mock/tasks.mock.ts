export type TaskStatus = "todo" | "in-progress" | "done";
export type TaskPriority = "low" | "medium" | "high";

export type TasksInterface = {
    id: string;
    projectId: string;
    clientId: string;
    title: string;
    priority: TaskPriority;
    status: TaskStatus;
    dueDate: string;
};

export const tasksData: TasksInterface[] = [
    {
        id: "t1",
        projectId: "p1",
        clientId: "1",
        title: "Wireframe homepage layout",
        priority: "high",
        status: "done",
        dueDate: "2026-03-05",
    },
    {
        id: "t2",
        projectId: "p1",
        clientId: "1",
        title: "Implement product listing page",
        priority: "high",
        status: "in-progress",
        dueDate: "2026-03-15",
    },
    {
        id: "t3",
        projectId: "p1",
        clientId: "1",
        title: "Shopping cart & checkout flow",
        priority: "high",
        status: "todo",
        dueDate: "2026-03-28",
    },
    {
        id: "t4",
        projectId: "p2",
        clientId: "1",
        title: "Set up Stripe payment gateway",
        priority: "high",
        status: "in-progress",
        dueDate: "2026-03-20",
    },
    {
        id: "t5",
        projectId: "p2",
        clientId: "1",
        title: "Integrate ShipStation logistics API",
        priority: "medium",
        status: "todo",
        dueDate: "2026-04-05",
    },
    {
        id: "t6",
        projectId: "p5",
        clientId: "2",
        title: "Design hero section mockup",
        priority: "high",
        status: "done",
        dueDate: "2026-03-10",
    },
    {
        id: "t7",
        projectId: "p5",
        clientId: "2",
        title: "Build animation interactions in Framer",
        priority: "medium",
        status: "in-progress",
        dueDate: "2026-03-22",
    },
    {
        id: "t8",
        projectId: "p6",
        clientId: "3",
        title: "Set up React Native project structure",
        priority: "high",
        status: "done",
        dueDate: "2026-03-01",
    },
    {
        id: "t9",
        projectId: "p6",
        clientId: "3",
        title: "Build restaurant listing & search",
        priority: "high",
        status: "in-progress",
        dueDate: "2026-03-18",
    },
    {
        id: "t10",
        projectId: "p6",
        clientId: "3",
        title: "Order tracking & push notifications",
        priority: "medium",
        status: "todo",
        dueDate: "2026-04-07",
    },
    {
        id: "t11",
        projectId: "p8",
        clientId: "5",
        title: "Install and configure multilingual plugin",
        priority: "medium",
        status: "done",
        dueDate: "2026-03-08",
    },
    {
        id: "t12",
        projectId: "p8",
        clientId: "5",
        title: "Build custom page templates",
        priority: "medium",
        status: "in-progress",
        dueDate: "2026-03-24",
    },
    {
        id: "t13",
        projectId: "p10",
        clientId: "6",
        title: "Design portfolio layout & typography",
        priority: "low",
        status: "done",
        dueDate: "2026-03-07",
    },
    {
        id: "t14",
        projectId: "p10",
        clientId: "6",
        title: "Integrate Sanity CMS for blog posts",
        priority: "medium",
        status: "todo",
        dueDate: "2026-03-18",
    },
    {
        id: "t15",
        projectId: "p3",
        clientId: "1",
        title: "Design admin UI components",
        priority: "low",
        status: "todo",
        dueDate: "2026-04-20",
    },
];
