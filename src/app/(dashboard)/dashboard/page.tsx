import Content from "@/components/layout/app-content";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  return (
    <Content>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="w-full max-w-sm">
          <CardContent>
            <h4 className="font-medium">Total Clients</h4>
            <h5>10</h5>
          </CardContent>
        </Card>
        <Card className="w-full max-w-sm">
          <CardContent>
            <h4 className="font-medium">Pending Tasks</h4>
            <h5>8</h5>
          </CardContent>
        </Card>
        <Card className="w-full max-w-sm">
          <CardContent>
            <h4 className="font-medium">Overdue Tasks</h4>
            <h5>3</h5>
          </CardContent>
        </Card>
        <Card className="w-full max-w-sm">
          <CardContent>
            <h4 className="font-medium">Pending Payments</h4>
            <h5>$3000</h5>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        <Card className="w-full ">
          <CardContent>
            <h4 className="font-medium mb-4">Task List</h4>
            <FieldGroup className="gap-3">
              <Field orientation="horizontal">
                <Checkbox
                  id="finder-pref-9k2-hard-disks-ljj-checkbox"
                  name="finder-pref-9k2-hard-disks-ljj-checkbox"
                  defaultChecked
                />
                <FieldLabel
                  htmlFor="finder-pref-9k2-hard-disks-ljj-checkbox"
                  className="font-normal"
                >
                  Hard disks
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox
                  id="finder-pref-9k2-external-disks-1yg-checkbox"
                  name="finder-pref-9k2-external-disks-1yg-checkbox"
                  defaultChecked
                />
                <FieldLabel
                  htmlFor="finder-pref-9k2-external-disks-1yg-checkbox"
                  className="font-normal"
                >
                  External disks
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox
                  id="finder-pref-9k2-cds-dvds-fzt-checkbox"
                  name="finder-pref-9k2-cds-dvds-fzt-checkbox"
                />
                <FieldLabel
                  htmlFor="finder-pref-9k2-cds-dvds-fzt-checkbox"
                  className="font-normal"
                >
                  CDs, DVDs, and iPods
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox
                  id="finder-pref-9k2-connected-servers-6l2-checkbox"
                  name="finder-pref-9k2-connected-servers-6l2-checkbox"
                />
                <FieldLabel
                  htmlFor="finder-pref-9k2-connected-servers-6l2-checkbox"
                  className="font-normal"
                >
                  Connected servers
                </FieldLabel>
              </Field>
            </FieldGroup>
          </CardContent>
        </Card>
        <Card className="w-full ">
          <CardContent>
            <h4 className="font-medium mb-4">Payment Alerts</h4>
            <div className="flex flex-col gap-2">
              <Badge variant={"destructive"} className="font-normal">
                Client C - $300 Overdue
              </Badge>
              <Badge variant={"secondary"} className="font-normal">
                Client D - $500
              </Badge>
              <Badge variant={"secondary"} className="font-normal">
                Client E - $400
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </Content>
  );
};

export default Dashboard;
