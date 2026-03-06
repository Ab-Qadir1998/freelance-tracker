"use client";

import Content from "@/components/layout/app-content";
import { AppModal } from "@/components/shared/app-modal";
import { DataTable } from "@/components/shared/data-table";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { taskColumns } from "@/components/modules/tasks/tasks-columns";
import { tasksData } from "@/core/mock/tasks.mock";
import { projectsData } from "@/core/mock/projects.mock";
import { clientsData } from "@/core/mock/clients.mock";
import { Plus } from "lucide-react";
import { DatePicker } from "@/components/shared/date-picker";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import React from "react";

const Tasks = () => {
    const [dueDate, setDueDate] = React.useState<Date>();

    return (
        <Content>
            <div className="flex items-center justify-end">
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
            <DataTable
                columns={taskColumns}
                data={tasksData}
                filterColumn="title"
                filterPlaceholder="Filter tasks..."
            />
        </Content>
    );
};

export default Tasks;
