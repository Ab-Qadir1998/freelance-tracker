"use client";

import Content from "@/components/layout/app-content";
import { AppModal } from "@/components/shared/app-modal";
import { DataTable } from "@/components/shared/data-table";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { projectColumns } from "@/components/modules/projects/projects-columns";
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

const Projects = () => {
    const [deadline, setDeadline] = React.useState<Date>();

    return (
        <Content>
            <div className="flex items-center justify-end">
                <AppModal
                    trigger={
                        <Button variant="outline" className="cursor-pointer">
                            Add Project <Plus />
                        </Button>
                    }
                    title="Add Project"
                    description="Fill in the details to add a new project."
                    submitTrigger={<Button type="submit">Add Project</Button>}
                >
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <Field>
                                <FieldLabel htmlFor="project-title">Project Title</FieldLabel>
                                <Input
                                    id="project-title"
                                    type="text"
                                    placeholder="e.g. E-Commerce Redesign"
                                />
                            </Field>
                            <Field className="flex flex-col gap-1.5">
                                <FieldLabel htmlFor="project-client">Client</FieldLabel>
                                <Select>
                                    <SelectTrigger id="project-client">
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
                                <FieldLabel htmlFor="project-budget">Budget ($)</FieldLabel>
                                <Input
                                    id="project-budget"
                                    type="number"
                                    placeholder="e.g. 3000"
                                />
                            </Field>
                            <Field className="flex flex-col gap-1.5 overflow-hidden">
                                <FieldLabel htmlFor="project-deadline">Deadline</FieldLabel>
                                <DatePicker date={deadline} setDate={setDeadline} />
                            </Field>
                            <Field className="col-span-2">
                                <FieldLabel htmlFor="project-description">
                                    Description
                                </FieldLabel>
                                <Input
                                    id="project-description"
                                    type="text"
                                    placeholder="Brief project description..."
                                />
                            </Field>
                        </div>
                    </form>
                </AppModal>
            </div>
            <DataTable
                columns={projectColumns}
                data={projectsData}
                filterColumn="title"
                filterPlaceholder="Filter projects..."
            />
        </Content>
    );
};

export default Projects;
