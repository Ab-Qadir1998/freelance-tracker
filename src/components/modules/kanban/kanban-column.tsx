"use client";

import React, { useMemo } from "react";
import { useDroppable } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { KanbanColumn as KanbanColumnType, KanbanTask } from "./kanban-types";
import { KanbanCard } from "./kanban-card";
import { MoreHorizontal, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface KanbanColumnProps {
    column: KanbanColumnType;
    tasks: KanbanTask[];
}

export function KanbanColumn({ column, tasks }: KanbanColumnProps) {
    const columnData = useMemo(() => ({
        type: "Column",
        column,
    }), [column]);

    const { setNodeRef } = useDroppable({
        id: column.id,
        data: columnData,
    });

    const taskIds = useMemo(() => tasks.map((t) => t.id), [tasks]);

    return (
        <div className="flex flex-col w-[300px] min-w-[300px] shrink-0 bg-slate-50/50 dark:bg-stone-900/50 rounded-lg border p-3 h-full max-h-full">
            <div className="flex items-center justify-between mb-4 px-1">
                <div className="flex items-center gap-2">
                    <h2 className="font-bold text-sm">{column.title}</h2>
                    <span className="bg-slate-200 dark:bg-stone-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {tasks.length}
                    </span>
                </div>
                {/* <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-7 w-7 cursor-pointer hover:bg-white dark:hover:bg-stone-800">
                        <Plus className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-7 w-7 cursor-pointer hover:bg-white dark:hover:bg-stone-800">
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </div> */}
            </div>

            <div
                ref={setNodeRef}
                className="flex-1 flex flex-col gap-3 overflow-y-auto pr-1 custom-scrollbar"
            >
                <SortableContext
                    items={taskIds}
                    strategy={verticalListSortingStrategy}
                >
                    {tasks.map((task) => (
                        <KanbanCard key={task.id} task={task} />
                    ))}
                </SortableContext>

                {tasks.length === 0 && (
                    <div className="flex-1 border-2 border-dashed border-slate-200 dark:border-stone-800 rounded-lg flex items-center justify-center min-h-[100px]">
                        <p className="text-xs text-muted-foreground uppercase font-medium">No tasks</p>
                    </div>
                )}
            </div>
        </div>
    );
}
