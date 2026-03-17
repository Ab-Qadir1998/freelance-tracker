"use client";

import React from "react";
import {
    DndContext,
    DragOverlay,
    closestCorners,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragStartEvent,
    DragOverEvent,
    DragEndEvent,
} from "@dnd-kit/core";
import {
    arrayMove,
    sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { KanbanTask, KanbanStatus } from "./kanban-types";
import { KANBAN_COLUMNS, MOCK_KANBAN_TASKS } from "@/core/mock/kanban.mock";
import { KanbanColumn } from "./kanban-column";
import { KanbanCard } from "./kanban-card";
import { KanbanHeader } from "./kanban-header";
import { KanbanFilters } from "./kanban-filters";
import { createPortal } from "react-dom";

export function KanbanBoard() {
    const [tasks, setTasks] = React.useState<KanbanTask[]>(MOCK_KANBAN_TASKS);
    const [activeTask, setActiveTask] = React.useState<KanbanTask | null>(null);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5,
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const onDragStart = (event: DragStartEvent) => {
        if (event.active.data.current?.type === "Task") {
            setActiveTask(event.active.data.current.task);
        }
    };

    const onDragOver = (event: DragOverEvent) => {
        const { active, over } = event;
        if (!over) return;

        const activeId = active.id;
        const overId = over.id;

        if (activeId === overId) return;

        const isActiveATask = active.data.current?.type === "Task";
        const isOverATask = over.data.current?.type === "Task";

        if (!isActiveATask) return;

        // Im dropping a Task over another Task
        if (isActiveATask && isOverATask) {
            setTasks((tasks) => {
                const activeIndex = tasks.findIndex((t) => t.id === activeId);
                const overIndex = tasks.findIndex((t) => t.id === overId);

                if (tasks[activeIndex].status !== tasks[overIndex].status) {
                    tasks[activeIndex].status = tasks[overIndex].status;
                    return arrayMove(tasks, activeIndex, overIndex - 1);
                }

                return arrayMove(tasks, activeIndex, overIndex);
            });
        }

        const isOverAColumn = over.data.current?.type === "Column" || KANBAN_COLUMNS.some(c => c.id === overId);

        // Im dropping a Task over a column
        if (isActiveATask && isOverAColumn) {
            setTasks((tasks) => {
                const activeIndex = tasks.findIndex((t) => t.id === activeId);

                tasks[activeIndex].status = overId as KanbanStatus;
                return arrayMove(tasks, activeIndex, activeIndex);
            });
        }
    };

    const onDragEnd = (event: DragEndEvent) => {
        setActiveTask(null);
    };

    return (
        <div className="flex flex-col h-full overflow-hidden">
            <KanbanHeader />
            <KanbanFilters />

            <div className="flex-1 overflow-x-auto overflow-y-hidden pb-4 custom-scrollbar">
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCorners}
                    onDragStart={onDragStart}
                    onDragOver={onDragOver}
                    onDragEnd={onDragEnd}
                >
                    <div className="flex gap-6 h-full min-h-[500px]">
                        {KANBAN_COLUMNS.map((col) => (
                            <KanbanColumn
                                key={col.id}
                                column={col}
                                tasks={tasks.filter((t) => t.status === col.id)}
                            />
                        ))}
                    </div>

                    {typeof document !== "undefined" && createPortal(
                        <DragOverlay>
                            {activeTask ? (
                                <KanbanCard task={activeTask} />
                            ) : null}
                        </DragOverlay>,
                        document.body
                    )}
                </DndContext>
            </div>
        </div>
    );
}
