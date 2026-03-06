import Content from "@/components/layout/app-content";
import { AppModal } from "@/components/shared/app-modal";
import { clientColumns } from "@/components/modules/clients/clients-columns";
import { DataTable } from "@/components/shared/data-table";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { clientsData } from "@/core/mock/clients.mock";
import { Plus } from "lucide-react";
import FileUpload from "@/components/shared/file-upload";

const Clients = () => {
  return (
    <Content>
      <div className="flex items-center justify-end">
        <AppModal
          trigger={
            <Button variant="outline" className="cursor-pointer">
              Add Client <Plus />
            </Button>
          }
          title="Add Client"
          description="Fill in the details to add a new client."
          submitTrigger={<Button type="submit">Add Client</Button>}
        >
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Field>
                <FieldLabel htmlFor="client-name">Name</FieldLabel>
                <Input
                  id="client-name"
                  type="text"
                  placeholder="e.g John Doe"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="client-email">Email</FieldLabel>
                <Input
                  id="client-email"
                  type="email"
                  placeholder="e.g john@example.com"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="client-contact">Contact</FieldLabel>
                <Input
                  id="client-contact"
                  type="text"
                  placeholder="e.g +123456798"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="client-platform">Platform</FieldLabel>
                <Input
                  id="client-platform"
                  type="text"
                  placeholder="e.g Upwork, Fiverr"
                />
              </Field>
              <Field className="col-span-2">
                <FieldLabel htmlFor="pending-amount">Pending Amount</FieldLabel>
                <Input
                  id="pending-amount"
                  type="number"
                  placeholder="e.g $2000"
                />
              </Field>
              <div className="col-span-2 mt-2">
                <FileUpload />
              </div>
            </div>
          </form>
        </AppModal>
      </div>
      <DataTable
        columns={clientColumns}
        data={clientsData}
        filterColumn="clientName"
        filterPlaceholder="Filter clients..."
      />
    </Content>
  );
};

export default Clients;
