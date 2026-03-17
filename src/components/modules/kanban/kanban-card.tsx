"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { KanbanTask } from "./kanban-types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon } from "lucide-react";
import { getPriorityColor } from "./kanban-utils";
import { cn } from "@/lib/utils";

interface KanbanCardProps {
    task: KanbanTask;
}

export function KanbanCard({ task }: KanbanCardProps) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: task.id,
        data: {
            type: "Task",
            task,
        },
    });

    const style = {
        transform: CSS.Translate.toString(transform),
        transition,
    };

    if (isDragging) {
        return (
            <div
                ref={setNodeRef}
                style={style}
                className="opacity-30 border-2 border-primary rounded-lg h-[160px] w-full"
            />
        );
    }

    return (
        <Card
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className="cursor-grab active:cursor-grabbing hover:border-primary/50 transition-colors shadow-sm"
        >
            <CardHeader className="p-3 space-y-2">
                <div className="flex items-center justify-between gap-2">
                    <Badge variant="secondary" className={cn("text-[10px] uppercase font-bold", getPriorityColor(task.priority))}>
                        {task.priority}
                    </Badge>
                    {task.assignee && (
                        <Avatar className="h-6 w-6 border">
                            <AvatarImage src={task.assignee.avatar} />
                            <AvatarFallback className="text-[10px]">{task.assignee.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                    )}
                </div>
                <h3 className="text-sm font-semibold leading-none truncate">{task.title}</h3>
            </CardHeader>
            <CardContent className="p-3 pt-0 space-y-3">
                <div className="space-y-1">
                    <p className="text-[11px] text-muted-foreground flex items-center">
                        <span className="font-medium mr-1 text-foreground">Client:</span> {task.clientName}
                    </p>
                    <p className="text-[11px] text-muted-foreground flex items-center">
                        <span className="font-medium mr-1 text-foreground">Project:</span> {task.projectName}
                    </p>
                </div>

                <div className="flex items-center text-[10px] text-muted-foreground pt-2 border-t mt-2">
                    <CalendarIcon className="mr-1 h-3 w-3" />
                    {task.dueDate}
                </div>
            </CardContent>
        </Card>
    );
}
