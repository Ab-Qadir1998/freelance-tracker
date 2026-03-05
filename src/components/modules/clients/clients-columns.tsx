"use client";
import { ColumnDef } from "@tanstack/react-table";
import { ClientsInterface } from "@/core/mock/clients.mock";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Badge } from "../../ui/badge";
import { DollarSign, FolderKanban, Pencil, Phone, Trash2 } from "lucide-react";
import { Button } from "../../ui/button";
import { AppModal } from "@/components/shared/app-modal";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import FileUpload from "@/components/shared/file-upload";
import Link from "next/link";

export const clientColumns: ColumnDef<ClientsInterface>[] = [
  {
    accessorKey: "clientName",
    header: "Client",
    cell: ({ row }) => {
      const name = row.getValue("clientName") as string;
      const id = row.original.id;

      return (
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <Link
              href={`/clients/${id}`}
              className="font-medium hover:underline underline-offset-2"
            >
              {name}
            </Link>
            <span className="text-xs text-muted-foreground">
              {row.original.email}
            </span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "contact",
    header: "Contact",
    cell: ({ row }) => {
      const contact = row.getValue("contact") as string;

      return (
        <div className="flex items-center gap-2">
          <Phone size={14} />
          <span>{contact}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "platform",
    header: "Platform",
    cell: ({ row }) => (
      <Badge variant="outline">{row.original.platform}</Badge>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge
        variant={row.original.status === "active" ? "default" : "secondary"}
        className="capitalize"
      >
        {row.original.status}
      </Badge>
    ),
  },
  {
    accessorKey: "activeProjects",
    header: "Active Projects",
    cell: ({ row }) => {
      const activeProjects = row.getValue("activeProjects") as string;

      return (
        <div className="flex items-center gap-2">
          <FolderKanban size={14} />
          <span>{activeProjects}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "pendingAmount",
    header: "Pending Amount",
    cell: ({ row }) => {
      const pendingAmount = row.getValue("pendingAmount") as number;

      return (
        <div className="flex items-center gap-2">
          <DollarSign size={14} />
          <span>{pendingAmount.toLocaleString()}</span>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const client = row.original;

      return (
        <div className="flex items-center gap-2">
          <AppModal
            trigger={
              <Button
                size="icon"
                variant="ghost"
                className="cursor-pointer"
              >
                <Pencil size={14} />
              </Button>
            }
            title="Edit Client"
            description="Update the client's information."
            submitTrigger={<Button type="submit">Save Changes</Button>}
          >
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Field>
                  <FieldLabel htmlFor={`client-name-${client.id}`}>Name</FieldLabel>
                  <Input
                    id={`client-name-${client.id}`}
                    type="text"
                    defaultValue={client.clientName}
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor={`client-email-${client.id}`}>Email</FieldLabel>
                  <Input
                    id={`client-email-${client.id}`}
                    type="email"
                    defaultValue={client.email}
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor={`client-contact-${client.id}`}>Contact</FieldLabel>
                  <Input
                    id={`client-contact-${client.id}`}
                    type="text"
                    defaultValue={client.contact}
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor={`client-platform-${client.id}`}>Platform</FieldLabel>
                  <Input
                    id={`client-platform-${client.id}`}
                    type="text"
                    defaultValue={client.platform}
                  />
                </Field>
                <Field className="col-span-2">
                  <FieldLabel htmlFor={`pending-amount-${client.id}`}>Pending Amount</FieldLabel>
                  <Input
                    id={`pending-amount-${client.id}`}
                    type="number"
                    defaultValue={client.pendingAmount}
                  />
                </Field>
                <div className="col-span-2 mt-2">
                  <FileUpload />
                </div>
              </div>
            </form>
          </AppModal>

          <Button
            size="icon"
            variant="ghost"
            className="cursor-pointer text-destructive hover:text-destructive"
            onClick={() => console.log("Delete client:", client.id)}
          >
            <Trash2 size={14} />
          </Button>
        </div>
      );
    },
  },
];
