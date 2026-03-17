"use client";

import { AppModal } from "@/components/shared/app-modal";
import { DatePicker } from "@/components/shared/date-picker";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { clientsData } from "@/core/mock/clients.mock";
import { projectsData } from "@/core/mock/projects.mock";
import { Plus } from "lucide-react";
import React from "react";

export function KanbanHeader() {
    const [dueDate, setDueDate] = React.useState<Date>();
    return (
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Kanban Board</h1>
                <p className="text-muted-foreground">
                    Manage tasks across all projects and clients.
                </p>
            </div>
            <AppModal
                trigger={
                    <Button variant="outline" className="cursor-pointer">
                        Add Task <Plus />
                    </Button>
                }
                title="Add Task"
                description="Fill in the details to create a new task."
                submitTrigger={<Button type="submit">Add Task</Button>}
            >
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Field className="col-span-2">
                            <FieldLabel htmlFor="task-title">Task Title</FieldLabel>
                            <Input
                                id="task-title"
                                type="text"
                                placeholder="e.g. Build login page"
                            />
                        </Field>
                        <Field className="flex flex-col gap-1.5">
                            <FieldLabel htmlFor="task-project">Project</FieldLabel>
                            <Select>
                                <SelectTrigger id="task-project">
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
                            <FieldLabel htmlFor="task-client">Client</FieldLabel>
                            <Select>
                                <SelectTrigger id="task-client">
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
                            <FieldLabel htmlFor="task-priority">Priority</FieldLabel>
                            <Select>
                                <SelectTrigger id="task-priority">
                                    <SelectValue placeholder="Select priority..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="High">High</SelectItem>
                                    <SelectItem value="Medium">Medium</SelectItem>
                                    <SelectItem value="Low">Low</SelectItem>
                                </SelectContent>
                            </Select>
                        </Field>
                        <Field className="flex flex-col gap-1.5">
                            <FieldLabel htmlFor="task-status">Status</FieldLabel>
                            <Select>
                                <SelectTrigger id="task-status">
                                    <SelectValue placeholder="Select status..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="todo">To Do</SelectItem>
                                    <SelectItem value="in-progress">In Progress</SelectItem>
                                    <SelectItem value="done">Done</SelectItem>
                                </SelectContent>
                            </Select>
                        </Field>
                        <Field className="flex flex-col gap-1.5 overflow-hidden">
                            <FieldLabel htmlFor="task-due">Due Date</FieldLabel>
                            <DatePicker date={dueDate} setDate={setDueDate} />
                        </Field>
                    </div>
                </form>
            </AppModal>
        </div>
    );
}
