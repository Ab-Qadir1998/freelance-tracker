"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { RotateCcw, Filter } from "lucide-react";
import { clientsData } from "@/core/mock/clients.mock";
import { projectsData } from "@/core/mock/projects.mock";

export function KanbanFilters() {
    return (
        <div className="flex flex-wrap items-center gap-2 py-4">
            <div className="flex items-center gap-2 mr-auto">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filters:</span>
            </div>

            <Select>
                <SelectTrigger className="w-[160px] cursor-pointer">
                    <SelectValue placeholder="All Clients" />
                </SelectTrigger>
                <SelectContent>
                    {clientsData.map((client) => (
                        <SelectItem key={client.id} value={client.id}>
                            {client.clientName}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Select>
                <SelectTrigger className="w-[160px] cursor-pointer">
                    <SelectValue placeholder="All Projects" />
                </SelectTrigger>
                <SelectContent>
                    {projectsData.map((project) => (
                        <SelectItem key={project.id} value={project.id}>
                            {project.title}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Select>
                <SelectTrigger className="w-[160px] cursor-pointer">
                    <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Priorities</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                </SelectContent>
            </Select>

            <Button variant="outline" size="icon" className="cursor-pointer" title="Reset Filters">
                <RotateCcw className="h-4 w-4" />
            </Button>
        </div>
    );
}
