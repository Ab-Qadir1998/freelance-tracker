import Content from "@/components/layout/app-content";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { clientsData } from "@/core/mock/clients.mock";
import { projectsData } from "@/core/mock/projects.mock";
import { tasksData } from "@/core/mock/tasks.mock";
import { paymentsData } from "@/core/mock/payments.mock";
import { DashboardActivityChart } from "@/components/modules/dashboard/dashboard-activity-chart";
import {
  Users,
  FolderKanban,
  CheckSquare,
  DollarSign,
  Calendar,
  AlertCircle,
} from "lucide-react";

// Derived stats
const totalClients = clientsData.length;
const activeProjects = projectsData.filter((p) => p.status === "active").length;
const pendingTasks = tasksData.filter(
  (t) => t.status === "todo" || t.status === "in-progress"
).length;
const totalPendingPayments = paymentsData
  .filter((p) => p.status === "pending" || p.status === "overdue")
  .reduce((sum, p) => sum + p.amount, 0);

const recentTasks = tasksData
  .filter((t) => t.status !== "done")
  .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
  .slice(0, 5);

const overduePayments = paymentsData.filter((p) => p.status === "overdue");

const upcomingDeadlines = projectsData
  .filter(
    (p) =>
      p.status === "active" && new Date(p.deadline) >= new Date()
  )
  .sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime())
  .slice(0, 4);

const taskStatusVariant = {
  todo: "outline" as const,
  "in-progress": "default" as const,
  done: "secondary" as const,
};

const taskPriorityVariant = {
  low: "secondary" as const,
  medium: "default" as const,
  high: "destructive" as const,
};

const Dashboard = () => {
  return (
    <Content>
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="flex items-center gap-4 py-5">
            <div className="bg-secondary rounded-full p-2">
              <Users size={18} className="text-secondary-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Clients</p>
              <h3 className="text-2xl font-semibold">{totalClients}</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 py-5">
            <div className="bg-secondary rounded-full p-2">
              <FolderKanban size={18} className="text-secondary-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Projects</p>
              <h3 className="text-2xl font-semibold">{activeProjects}</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 py-5">
            <div className="bg-secondary rounded-full p-2">
              <CheckSquare size={18} className="text-secondary-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pending Tasks</p>
              <h3 className="text-2xl font-semibold">{pendingTasks}</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 py-5">
            <div className="bg-destructive/10 rounded-full p-2">
              <DollarSign size={18} className="text-destructive" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pending Payments</p>
              <h3 className="text-2xl font-semibold">
                ${totalPendingPayments.toLocaleString()}
              </h3>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Middle Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        {/* Upcoming Tasks */}
        <Card className="max-h-[360px] overflow-y-auto">
          <CardContent className="py-5">
            <h4 className="font-medium mb-4 flex items-center gap-2">
              <CheckSquare size={16} />
              Upcoming Tasks
            </h4>
            <div className="flex flex-col gap-3">
              {recentTasks.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  All tasks are complete!
                </p>
              ) : (
                recentTasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center justify-between gap-2"
                  >
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm font-medium truncate">
                        {task.title}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar size={11} />
                        {new Date(task.dueDate).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <Badge
                        variant={taskPriorityVariant[task.priority]}
                        className="text-xs"
                      >
                        {task.priority}
                      </Badge>
                      <Badge
                        variant={taskStatusVariant[task.status]}
                        className="text-xs"
                      >
                        {task.status === "in-progress"
                          ? "In Progress"
                          : task.status === "todo"
                            ? "To Do"
                            : "Done"}
                      </Badge>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        {/* Payment Alerts */}
        <Card className="max-h-[360px] overflow-y-auto">
          <CardContent className="py-5">
            <h4 className="font-medium mb-4 flex items-center gap-2">
              <AlertCircle size={16} />
              Payment Alerts
            </h4>
            <div className="flex flex-col gap-2">
              {overduePayments.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  No overdue payments!
                </p>
              ) : (
                overduePayments.map((payment) => {
                  const client = clientsData.find(
                    (c) => c.id === payment.clientId
                  );
                  return (
                    <div
                      key={payment.id}
                      className="flex items-center justify-between p-2.5 rounded-md bg-destructive/5 border border-destructive/20"
                    >
                      <div>
                        <p className="text-sm font-medium">
                          {client?.clientName ?? "Unknown"}
                        </p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar size={11} />
                          Due{" "}
                          {new Date(payment.dueDate).toLocaleDateString(
                            "en-GB",
                            { day: "2-digit", month: "short" }
                          )}
                        </p>
                      </div>
                      <Badge variant="destructive" className="font-semibold">
                        ${payment.amount.toLocaleString()}
                      </Badge>
                    </div>
                  );
                })
              )}
            </div>
          </CardContent>
        </Card>



      </div>
      {/* Upcoming Deadlines */}
      <div className="my-4">
        <Card>
          <CardContent className="py-5">
            <h4 className="font-medium mb-4 flex items-center gap-2">
              <Calendar size={16} />
              Upcoming Project Deadlines
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {upcomingDeadlines.map((project) => {
                const client = clientsData.find(
                  (c) => c.id === project.clientId
                );
                const daysLeft = Math.ceil(
                  (new Date(project.deadline).getTime() - new Date().getTime()) /
                  (1000 * 60 * 60 * 24)
                );
                return (
                  <div
                    key={project.id}
                    className="border rounded-lg p-3 flex flex-col gap-1"
                  >
                    <p className="text-sm font-medium line-clamp-1">
                      {project.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {client?.clientName}
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs flex items-center gap-1 text-muted-foreground">
                        <Calendar size={11} />
                        {new Date(project.deadline).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                        })}
                      </span>
                      <Badge
                        variant={daysLeft <= 7 ? "destructive" : "secondary"}
                        className="text-xs"
                      >
                        {daysLeft}d left
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Financial Activity Chart */}
      <DashboardActivityChart />

    </Content>
  );
};

export default Dashboard;
