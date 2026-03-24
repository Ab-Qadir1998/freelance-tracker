"use client";

import React, { useMemo } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { KanbanTask } from "./kanban-types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon } from "lucide-react";
import { getPriorityColor } from "./kanban-utils";
import { cn } from "@/lib/utils";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { MessageSquare, User, Briefcase, Building2, Clock, FileText } from "lucide-react";

interface KanbanCardProps {
    task: KanbanTask;
}

export function KanbanCard({ task }: KanbanCardProps) {
    const sortableData = useMemo(() => ({
        type: "Task",
        task,
    }), [task]);

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: task.id,
        data: sortableData,
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
        <Dialog>
            <DialogTrigger asChild>
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

                        <div className="flex items-center justify-between pt-2 border-t mt-2">
                            <div className="flex items-center text-[10px] text-muted-foreground">
                                <CalendarIcon className="mr-1 h-3 w-3" />
                                {task.dueDate}
                            </div>
                            {task.comments && task.comments.length > 0 && (
                                <div className="flex items-center text-[10px] text-muted-foreground gap-1">
                                    <MessageSquare className="h-3 w-3" />
                                    {task.comments.length}
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col p-0 overflow-hidden">
                <DialogHeader className="p-6 pb-2">
                    <DialogTitle className="text-xl font-bold flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        {task.title}
                    </DialogTitle>
                    <DialogDescription className="text-sm text-muted-foreground">
                        Manage task details and track progress.
                    </DialogDescription>
                </DialogHeader>

                <div className="flex-1 p-6 pt-2 overflow-y-auto custom-scrollbar">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="md:col-span-3 space-y-6">
                            <div>
                                <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-muted-foreground" /> Description
                                </h4>
                                <p className="text-sm text-muted-foreground leading-relaxed bg-muted/30 p-3 rounded-lg border border-dashed">
                                    {task.description || "No description provided."}
                                </p>
                            </div>

                            <Separator />

                            <div>
                                <h4 className="text-sm font-semibold mb-4 flex items-center gap-2">
                                    <MessageSquare className="h-4 w-4 text-muted-foreground" /> Comments
                                </h4>
                                <div className="space-y-4">
                                    {task.comments?.length ? task.comments.map(comment => (
                                        <div key={comment.id} className="flex gap-3">
                                            <Avatar className="h-8 w-8 border">
                                                <AvatarFallback className="text-xs font-bold">{comment.user.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1 space-y-1">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-xs font-bold">{comment.user}</span>
                                                    <span className="text-[10px] text-muted-foreground">{new Date(comment.createdAt).toLocaleDateString()}</span>
                                                </div>
                                                <div className="text-[11px] bg-muted/50 p-2 rounded-md">
                                                    {comment.text}
                                                </div>
                                            </div>
                                        </div>
                                    )) : (
                                        <p className="text-xs text-muted-foreground italic px-4 py-8 text-center border rounded-lg border-dashed">No comments yet.</p>
                                    )}

                                    <div className="pt-4 flex gap-3">
                                        <Avatar className="h-8 w-8 border">
                                            <AvatarFallback className="text-xs font-bold">U</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1 space-y-2">
                                            <textarea
                                                className="w-full text-xs p-2 border rounded-md min-h-[80px] resize-none outline-none focus:ring-1 focus:ring-primary bg-background"
                                                placeholder="Write a comment..."
                                            />
                                            <div className="flex justify-end">
                                                <button className="text-[10px] bg-primary text-primary-foreground px-3 py-1 rounded-md font-bold uppercase transition-opacity hover:opacity-90">
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-4 pt-1">
                                <div className="space-y-1.5">
                                    <span className="text-[10px] font-bold uppercase text-muted-foreground flex items-center gap-1">
                                        <Building2 className="h-3 w-3" /> Client
                                    </span>
                                    <p className="text-xs font-semibold bg-primary/5 p-2 rounded border border-primary/10">{task.clientName}</p>
                                </div>
                                <div className="space-y-1.5">
                                    <span className="text-[10px] font-bold uppercase text-muted-foreground flex items-center gap-1">
                                        <Briefcase className="h-3 w-3" /> Project
                                    </span>
                                    <p className="text-xs font-semibold bg-slate-500/5 p-2 rounded border border-slate-500/10">{task.projectName}</p>
                                </div>
                                <div className="space-y-1.5">
                                    <span className="text-[10px] font-bold uppercase text-muted-foreground flex items-center gap-1">
                                        <CalendarIcon className="h-3 w-3" /> Deadline
                                    </span>
                                    <p className="text-xs font-semibold bg-orange-500/5 p-2 rounded border border-orange-500/10 text-orange-600 dark:text-orange-400">
                                        {task.dueDate}
                                    </p>
                                </div>
                                <div className="space-y-1.5">
                                    <span className="text-[10px] font-bold uppercase text-muted-foreground">Priority</span>
                                    <div>
                                        <Badge variant="secondary" className={cn("text-[9px] uppercase font-bold px-2 py-0", getPriorityColor(task.priority))}>
                                            {task.priority}
                                        </Badge>
                                    </div>
                                </div>
                                {task.assignee && (
                                    <div className="space-y-2">
                                        <span className="text-[10px] font-bold uppercase text-muted-foreground flex items-center gap-1">
                                            <User className="h-3 w-3" /> Assignee
                                        </span>
                                        <div className="flex items-center gap-2 bg-muted/40 p-2 rounded border">
                                            <Avatar className="h-5 w-5">
                                                <AvatarImage src={task.assignee.avatar} />
                                                <AvatarFallback className="text-[10px]">{task.assignee.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <span className="text-[11px] font-medium">{task.assignee.name}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
