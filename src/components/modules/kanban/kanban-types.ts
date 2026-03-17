export type KanbanStatus = "todo" | "in-progress" | "review" | "done";

export type KanbanPriority = "low" | "medium" | "high";

export interface KanbanTask {
    id: string;
    title: string;
    clientName: string;
    projectName: string;
    priority: KanbanPriority;
    status: KanbanStatus;
    dueDate: string;
    assignee?: {
        name: string;
        avatar?: string;
    };
}

export interface KanbanColumn {
    id: KanbanStatus;
    title: string;
}
