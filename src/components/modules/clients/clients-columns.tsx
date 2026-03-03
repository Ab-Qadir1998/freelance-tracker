"use client";
import { ColumnDef } from "@tanstack/react-table";
import { ClientsInterface } from "@/core/mock/clients.mock";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { DollarSign, FolderKanban, Pencil, Phone, Trash2 } from "lucide-react";
import { Button } from "../../ui/button";

export const clientColumns: ColumnDef<ClientsInterface>[] = [
  {
    accessorKey: "clientName",
    header: "Client",
    cell: ({ row }) => {
      const name = row.getValue("clientName") as string;

      return (
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span>{name}</span>
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
      const pendingAmount = row.getValue("pendingAmount") as string;

      return (
        <div className="flex items-center gap-2">
          <DollarSign size={14} />
          <span>{pendingAmount}</span>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const client = row.original;

      const handleEdit = () => {
        console.log("Edit client:", client);
        // TODO: open edit modal later
      };

      const handleDelete = () => {
        console.log("Delete client:", client.id);
        // TODO: delete logic later
      };

      return (
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            className="cursor-pointer"
            onClick={handleEdit}
          >
            <Pencil size={10} />
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className="cursor-pointer"
            onClick={handleDelete}
          >
            <Trash2 size={10} />
          </Button>
        </div>
      );
    },
  },
];
