import { KanbanStatus, KanbanPriority } from "./kanban-types";

export const getPriorityColor = (priority: KanbanPriority) => {
    switch (priority) {
        case "high":
            return "bg-red-500/10 text-red-500 hover:bg-red-500/20";
        case "medium":
            return "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20";
        case "low":
            return "bg-slate-500/10 text-slate-500 hover:bg-slate-500/20";
        default:
            return "bg-slate-500/10 text-slate-500 hover:bg-slate-500/20";
    }
};

export const getStatusLabel = (status: KanbanStatus) => {
    switch (status) {
        case "todo":
            return "Todo";
        case "in-progress":
            return "In Progress";
        case "review":
            return "Review";
        case "done":
            return "Done";
        default:
            return status;
    }
};
