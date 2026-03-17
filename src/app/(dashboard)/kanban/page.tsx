import { KanbanBoard } from "@/components/modules/kanban/kanban-board";

export default function KanbanPage() {
    return (
        <div className="flex flex-col h-full p-6 bg-slate-50/30 dark:bg-stone-950/30">
            <KanbanBoard />
        </div>
    );
}
