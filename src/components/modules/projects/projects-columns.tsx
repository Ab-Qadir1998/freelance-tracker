"use client";
import { ColumnDef } from "@tanstack/react-table";
import { ProjectsInterface } from "@/core/mock/projects.mock";
import { clientsData } from "@/core/mock/clients.mock";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, DollarSign, Pencil, Trash2 } from "lucide-react";
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

const statusVariant: Record<
    ProjectsInterface["status"],
    "default" | "secondary" | "destructive" | "outline" | "success" | "warning" | "neutral"
> = {
    active: "neutral",
    completed: "success",
    "on-hold": "warning",
};

const statusLabel: Record<ProjectsInterface["status"], string> = {
    active: "Active",
    completed: "Completed",
    "on-hold": "On Hold",
};

export const projectColumns: ColumnDef<ProjectsInterface>[] = [
    {
        accessorKey: "title",
        header: "Project",
        cell: ({ row }) => {
            const project = row.original;
            return (
                <div className="flex flex-col">
                    <span className="font-medium">{project.title}</span>
                    <span className="text-muted-foreground text-xs line-clamp-1">
                        {project.description}
                    </span>
                </div>
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
        accessorKey: "budget",
        header: "Budget",
        cell: ({ row }) => {
            const { budget, paid } = row.original;
            return (
                <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-1 text-sm">
                        <DollarSign size={13} />
                        <span>{budget.toLocaleString()}</span>
                    </div>
                    <span className="text-muted-foreground text-xs">
                        ${paid.toLocaleString()} paid
                    </span>
                </div>
            );
        },
    },
    {
        accessorKey: "deadline",
        header: "Deadline",
        cell: ({ row }) => {
            const deadline = new Date(row.original.deadline);
            const isOverdue =
                deadline < new Date() && row.original.status !== "completed";
            return (
                <div
                    className={`flex items-center gap-1.5 text-sm ${isOverdue ? "text-destructive" : ""}`}
                >
                    <Calendar size={13} />
                    <span>{deadline.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</span>
                </div>
            );
        },
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const project = row.original;
            return (
                <div className="flex items-center gap-2">
                    <EditProjectModal project={project} />
                    <Button
                        size="icon"
                        variant="ghost"
                        className="cursor-pointer text-destructive hover:text-destructive"
                        onClick={() => console.log("Delete project:", project.id)}
                    >
                        <Trash2 size={14} />
                    </Button>
                </div>
            );
        },
    },
];

const EditProjectModal = ({ project }: { project: ProjectsInterface }) => {
    const [deadline, setDeadline] = React.useState<Date | undefined>(
        new Date(project.deadline)
    );

    return (
        <AppModal
            trigger={
                <Button size="icon" variant="ghost" className="cursor-pointer">
                    <Pencil size={14} />
                </Button>
            }
            title="Edit Project"
            description="Update the project's information."
            submitTrigger={<Button type="submit">Save Changes</Button>}
        >
            <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Field>
                        <FieldLabel htmlFor={`project-title-${project.id}`}>
                            Project Title
                        </FieldLabel>
                        <Input
                            id={`project-title-${project.id}`}
                            type="text"
                            defaultValue={project.title}
                        />
                    </Field>
                    <Field className="flex flex-col">
                        <FieldLabel htmlFor={`project-client-${project.id}`}>
                            Client
                        </FieldLabel>
                        <Select defaultValue={project.clientId}>
                            <SelectTrigger id={`project-client-${project.id}`}>
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
                    <Field>
                        <FieldLabel htmlFor={`project-budget-${project.id}`}>
                            Budget ($)
                        </FieldLabel>
                        <Input
                            id={`project-budget-${project.id}`}
                            type="number"
                            defaultValue={project.budget}
                        />
                    </Field>
                    <Field className="flex flex-col overflow-hidden">
                        <FieldLabel htmlFor={`project-deadline-${project.id}`}>
                            Deadline
                        </FieldLabel>
                        <DatePicker date={deadline} setDate={setDeadline} />
                    </Field>
                    <Field className="col-span-2">
                        <FieldLabel htmlFor={`project-description-${project.id}`}>
                            Description
                        </FieldLabel>
                        <Input
                            id={`project-description-${project.id}`}
                            type="text"
                            defaultValue={project.description}
                        />
                    </Field>
                </div>
            </form>
        </AppModal>
    );
};

