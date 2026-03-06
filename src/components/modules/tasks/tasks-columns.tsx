"use client";
import { ColumnDef } from "@tanstack/react-table";
import { TasksInterface } from "@/core/mock/tasks.mock";
import { clientsData } from "@/core/mock/clients.mock";
import { projectsData } from "@/core/mock/projects.mock";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Pencil, Trash2 } from "lucide-react";
import { AppModal } from "@/components/shared/app-modal";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/shared/date-picker";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import React from "react";
import Link from "next/link";

const priorityVariant: Record<
    TasksInterface["priority"],
    "default" | "secondary" | "destructive" | "outline" | "success" | "warning" | "neutral"
> = {
    high: "destructive",
    medium: "warning",
    low: "neutral",
};

const statusVariant: Record<
    TasksInterface["status"],
    "default" | "secondary" | "destructive" | "outline" | "success" | "warning" | "neutral"
> = {
    "in-progress": "default",
    done: "success",
    todo: "neutral",
};

const statusLabel: Record<TasksInterface["status"], string> = {
    "in-progress": "In Progress",
    done: "Done",
    todo: "To Do",
};

export const taskColumns: ColumnDef<TasksInterface>[] = [
    {
        accessorKey: "title",
        header: "Task",
        cell: ({ row }) => (
            <span className="font-medium">{row.original.title}</span>
        ),
    },
    {
        accessorKey: "projectId",
        header: "Project",
        cell: ({ row }) => {
            const project = projectsData.find((p) => p.id === row.original.projectId);
            return project ? (
                <span className="text-sm text-muted-foreground">{project.title}</span>
            ) : (
                <span className="text-muted-foreground text-sm">—</span>
            );
        },
    },
    {
        accessorKey: "clientId",
        header: "Client",
        cell: ({ row }) => {
            const client = clientsData.find((c) => c.id === row.original.clientId);
            return client ? (
                <Link
                    href={`/clients/${client.id}`}
                    className="text-sm hover:underline underline-offset-2"
                >
                    {client.clientName}
                </Link>
            ) : (
                <span className="text-muted-foreground text-sm">—</span>
            );
        },
    },
    {
        accessorKey: "priority",
        header: "Priority",
        cell: ({ row }) => {
            const priority = row.original.priority;
            return (
                <Badge variant={priorityVariant[priority]} className="capitalize">
                    {priority}
                </Badge>
            );
        },
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.original.status;
            return (
                <Badge variant={statusVariant[status]}>{statusLabel[status]}</Badge>
            );
        },
    },
    {
        accessorKey: "dueDate",
        header: "Due Date",
        cell: ({ row }) => {
            const due = new Date(row.original.dueDate);
            const isOverdue =
                due < new Date() && row.original.status !== "done";
            return (
                <div
                    className={`flex items-center gap-1.5 text-sm ${isOverdue ? "text-destructive font-medium" : ""}`}
                >
                    <Calendar size={12} />
                    <span>{due.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</span>
                </div>
            );
        },
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const task = row.original;
            return (
                <div className="flex items-center gap-2">
                    <EditTaskModal task={task} />
                    <Button
                        size="icon"
                        variant="ghost"
                        className="cursor-pointer text-destructive hover:text-destructive"
                        onClick={() => console.log("Delete task:", task.id)}
                    >
                        <Trash2 size={14} />
                    </Button>
                </div>
            );
        },
    },
];

const EditTaskModal = ({ task }: { task: TasksInterface }) => {
    const [dueDate, setDueDate] = React.useState<Date | undefined>(
        new Date(task.dueDate)
    );

    return (
        <AppModal
            trigger={
                <Button size="icon" variant="ghost" className="cursor-pointer">
                    <Pencil size={14} />
                </Button>
            }
            title="Edit Task"
            description="Update the task's information."
            submitTrigger={<Button type="submit">Save Changes</Button>}
        >
            <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Field className="col-span-2">
                        <FieldLabel htmlFor={`task-title-${task.id}`}>Task Title</FieldLabel>
                        <Input
                            id={`task-title-${task.id}`}
                            type="text"
                            defaultValue={task.title}
                        />
                    </Field>
                    <Field className="flex flex-col gap-1.5">
                        <FieldLabel htmlFor={`task-project-${task.id}`}>Project</FieldLabel>
                        <Select defaultValue={task.projectId}>
                            <SelectTrigger id={`task-project-${task.id}`}>
                                <SelectValue placeholder="Select a project..." />
                            </SelectTrigger>
                            <SelectContent>
                                {projectsData.map((project) => (
                                    <SelectItem key={project.id} value={project.id}>
                                        {project.title}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </Field>
                    <Field className="flex flex-col gap-1.5">
                        <FieldLabel htmlFor={`task-client-${task.id}`}>Client</FieldLabel>
                        <Select defaultValue={task.clientId}>
                            <SelectTrigger id={`task-client-${task.id}`}>
                                <SelectValue placeholder="Select a client..." />
                            </SelectTrigger>
                            <SelectContent>
                                {clientsData.map((client) => (
                                    <SelectItem key={client.id} value={client.id}>
                                        {client.clientName}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </Field>
                    <Field className="flex flex-col gap-1.5">
                        <FieldLabel htmlFor={`task-priority-${task.id}`}>Priority</FieldLabel>
                        <Select defaultValue={task.priority}>
                            <SelectTrigger id={`task-priority-${task.id}`}>
                                <SelectValue placeholder="Select priority..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="high">High</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="low">Low</SelectItem>
                            </SelectContent>
                        </Select>
                    </Field>
                    <Field className="flex flex-col gap-1.5">
                        <FieldLabel htmlFor={`task-status-${task.id}`}>Status</FieldLabel>
                        <Select defaultValue={task.status}>
                            <SelectTrigger id={`task-status-${task.id}`}>
                                <SelectValue placeholder="Select status..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="todo">To Do</SelectItem>
                                <SelectItem value="in-progress">In Progress</SelectItem>
                                <SelectItem value="done">Done</SelectItem>
                            </SelectContent>
                        </Select>
                    </Field>
                    <Field className="flex flex-col gap-1.5 overflow-hidden col-span-2">
                        <FieldLabel htmlFor={`task-due-${task.id}`}>Due Date</FieldLabel>
                        <DatePicker date={dueDate} setDate={setDueDate} />
                    </Field>
                </div>
            </form>
        </AppModal>
    );
};

