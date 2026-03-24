export type KanbanStatus = "todo" | "in-progress" | "review" | "done";

export type KanbanPriority = "low" | "medium" | "high";

export interface KanbanComment {
    id: string;
    user: string;
    text: string;
    createdAt: string;
}

export interface KanbanTask {
    id: string;
    title: string;
    clientName: string;
    projectName: string;
    priority: KanbanPriority;
    status: KanbanStatus;
    dueDate: string;
    description?: string;
    comments?: KanbanComment[];
    assignee?: {
        name: string;
        avatar?: string;
    };
}

export interface KanbanColumn {
    id: KanbanStatus;
    title: string;
}
