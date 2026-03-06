"use client";
import { ColumnDef } from "@tanstack/react-table";
import { PaymentsInterface } from "@/core/mock/payments.mock";
import { clientsData } from "@/core/mock/clients.mock";
import { projectsData } from "@/core/mock/projects.mock";
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
    PaymentsInterface["status"],
    "default" | "secondary" | "destructive" | "outline" | "success" | "warning" | "neutral"
> = {
    paid: "success",
    pending: "warning",
    overdue: "destructive",
};

const statusLabel: Record<PaymentsInterface["status"], string> = {
    paid: "Paid",
    pending: "Pending",
    overdue: "Overdue",
};

export const paymentColumns: ColumnDef<PaymentsInterface>[] = [
    {
        id: "clientName",
        accessorFn: (row) => {
            const client = clientsData.find((c) => c.id === row.clientId);
            return client?.clientName ?? "";
        },
        header: "Client",
        cell: ({ row }) => {
            const client = clientsData.find((c) => c.id === row.original.clientId);
            return client ? (
                <Link
                    href={`/clients/${client.id}`}
                    className="font-medium hover:underline underline-offset-2"
                >
                    {client.clientName}
                </Link>
            ) : (
                <span className="text-muted-foreground">—</span>
            );
        },
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
        accessorKey: "amount",
        header: "Amount",
        cell: ({ row }) => (
            <div className="flex items-center gap-1 font-medium">
                <DollarSign size={13} />
                <span>{row.original.amount.toLocaleString()}</span>
            </div>
        ),
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
            return (
                <div className="flex items-center gap-1.5 text-sm">
                    <Calendar size={12} />
                    <span>{due.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</span>
                </div>
            );
        },
    },
    {
        accessorKey: "paidAt",
        header: "Paid On",
        cell: ({ row }) => {
            const paidAt = row.original.paidAt;
            if (!paidAt)
                return <span className="text-muted-foreground text-sm">—</span>;
            const date = new Date(paidAt);
            return (
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar size={12} />
                    <span>{date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</span>
                </div>
            );
        },
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const payment = row.original;
            return (
                <div className="flex items-center gap-2">
                    <EditPaymentModal payment={payment} />
                    <Button
                        size="icon"
                        variant="ghost"
                        className="cursor-pointer text-destructive hover:text-destructive"
                        onClick={() => console.log("Delete payment:", payment.id)}
                    >
                        <Trash2 size={14} />
                    </Button>
                </div>
            );
        },
    },
];

const EditPaymentModal = ({ payment }: { payment: PaymentsInterface }) => {
    const [dueDate, setDueDate] = React.useState<Date | undefined>(
        new Date(payment.dueDate)
    );
    const [paidAt, setPaidAt] = React.useState<Date | undefined>(
        payment.paidAt ? new Date(payment.paidAt) : undefined
    );

    return (
        <AppModal
            trigger={
                <Button size="icon" variant="ghost" className="cursor-pointer">
                    <Pencil size={14} />
                </Button>
            }
            title="Edit Payment"
            description="Update the payment record."
            submitTrigger={<Button type="submit">Save Changes</Button>}
        >
            <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Field className="flex flex-col gap-1.5">
                        <FieldLabel htmlFor={`payment-client-${payment.id}`}>Client</FieldLabel>
                        <Select defaultValue={payment.clientId}>
                            <SelectTrigger id={`payment-client-${payment.id}`}>
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
                        <FieldLabel htmlFor={`payment-project-${payment.id}`}>Project</FieldLabel>
                        <Select defaultValue={payment.projectId}>
                            <SelectTrigger id={`payment-project-${payment.id}`}>
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
                    <Field>
                        <FieldLabel htmlFor={`payment-amount-${payment.id}`}>Amount ($)</FieldLabel>
                        <Input
                            id={`payment-amount-${payment.id}`}
                            type="number"
                            defaultValue={payment.amount}
                        />
                    </Field>
                    <Field className="flex flex-col gap-1.5">
                        <FieldLabel htmlFor={`payment-status-${payment.id}`}>Status</FieldLabel>
                        <Select defaultValue={payment.status}>
                            <SelectTrigger id={`payment-status-${payment.id}`}>
                                <SelectValue placeholder="Select status..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="paid">Paid</SelectItem>
                                <SelectItem value="overdue">Overdue</SelectItem>
                            </SelectContent>
                        </Select>
                    </Field>
                    <Field className="flex flex-col gap-1.5 overflow-hidden">
                        <FieldLabel htmlFor={`payment-due-${payment.id}`}>Due Date</FieldLabel>
                        <DatePicker date={dueDate} setDate={setDueDate} />
                    </Field>
                    <Field className="flex flex-col gap-1.5 overflow-hidden">
                        <FieldLabel htmlFor={`payment-paid-${payment.id}`}>Paid On</FieldLabel>
                        <DatePicker date={paidAt} setDate={setPaidAt} />
                    </Field>
                </div>
            </form>
        </AppModal>
    );
};

