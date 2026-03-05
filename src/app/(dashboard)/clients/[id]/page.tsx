import Content from "@/components/layout/app-content";
import { clientsData } from "@/core/mock/clients.mock";
import { projectsData } from "@/core/mock/projects.mock";
import { paymentsData } from "@/core/mock/payments.mock";
import { notFound } from "next/navigation";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/shared/data-table";
import { projectColumns } from "@/components/modules/projects/projects-columns";
import { paymentColumns } from "@/components/modules/payments/payments-columns";
import {
    Mail,
    Phone,
    Globe,
    Calendar,
    FolderKanban,
    DollarSign,
} from "lucide-react";

interface ClientDetailPageProps {
    params: Promise<{ id: string }>;
}

const ClientDetail = async ({ params }: ClientDetailPageProps) => {
    const { id } = await params;
    const client = clientsData.find((c) => c.id === id);

    if (!client) notFound();

    const clientProjects = projectsData.filter((p) => p.clientId === id);
    const clientPayments = paymentsData.filter((p) => p.clientId === id);

    const totalEarned = clientPayments
        .filter((p) => p.status === "paid")
        .reduce((sum, p) => sum + p.amount, 0);

    const totalPending = clientPayments
        .filter((p) => p.status === "pending")
        .reduce((sum, p) => sum + p.amount, 0);

    const totalOverdue = clientPayments
        .filter((p) => p.status === "overdue")
        .reduce((sum, p) => sum + p.amount, 0);

    const activeProjects = clientProjects.filter(
        (p) => p.status === "active"
    ).length;

    return (
        <Content>
            {/* Client Header */}
            <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                    <div className="size-14 rounded-full bg-secondary flex items-center justify-center text-xl font-semibold text-secondary-foreground">
                        {client.clientName.charAt(0)}
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h2 className="text-xl font-semibold">{client.clientName}</h2>
                            <Badge variant={client.status === "active" ? "default" : "secondary"} className="capitalize">
                                {client.status}
                            </Badge>
                        </div>
                        <div className="flex items-center flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                                <Mail size={13} /> {client.email}
                            </span>
                            <span className="flex items-center gap-1">
                                <Phone size={13} /> {client.contact}
                            </span>
                            <span className="flex items-center gap-1">
                                <Globe size={13} /> {client.platform}
                            </span>
                            <span className="flex items-center gap-1">
                                <Calendar size={13} /> Joined{" "}
                                {new Date(client.joinedAt).toLocaleDateString("en-GB", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                })}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <Card>
                    <CardContent className="py-4">
                        <p className="text-xs text-muted-foreground mb-1">Active Projects</p>
                        <div className="flex items-center gap-1.5 font-semibold text-lg">
                            <FolderKanban size={16} className="text-muted-foreground" />
                            {activeProjects}
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="py-4">
                        <p className="text-xs text-muted-foreground mb-1">Total Earned</p>
                        <div className="flex items-center gap-1.5 font-semibold text-lg">
                            <DollarSign size={16} className="text-muted-foreground" />
                            {totalEarned.toLocaleString()}
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="py-4">
                        <p className="text-xs text-muted-foreground mb-1">Pending</p>
                        <div className="flex items-center gap-1.5 font-semibold text-lg">
                            <DollarSign size={16} className="text-muted-foreground" />
                            {totalPending.toLocaleString()}
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="py-4">
                        <p className="text-xs text-muted-foreground mb-1">Overdue</p>
                        <div className="flex items-center gap-1.5 font-semibold text-lg text-destructive">
                            <DollarSign size={16} />
                            {totalOverdue.toLocaleString()}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="projects">
                <TabsList className="mb-4">
                    <TabsTrigger value="projects">
                        Projects ({clientProjects.length})
                    </TabsTrigger>
                    <TabsTrigger value="payments">
                        Payments ({clientPayments.length})
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="projects">
                    <DataTable columns={projectColumns} data={clientProjects} />
                </TabsContent>

                <TabsContent value="payments">
                    <DataTable columns={paymentColumns} data={clientPayments} />
                </TabsContent>
            </Tabs>
        </Content>
    );
};

export default ClientDetail;
