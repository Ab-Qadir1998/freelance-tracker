import Content from "@/components/layout/app-content";
import { Card, CardContent } from "@/components/ui/card";
import { paymentColumns } from "@/components/modules/payments/payments-columns";
import { DataTable } from "@/components/shared/data-table";
import { paymentsData } from "@/core/mock/payments.mock";
import { DollarSign, AlertTriangle, CheckCircle, Clock } from "lucide-react";

const totalEarned = paymentsData
    .filter((p) => p.status === "paid")
    .reduce((sum, p) => sum + p.amount, 0);

const totalPending = paymentsData
    .filter((p) => p.status === "pending")
    .reduce((sum, p) => sum + p.amount, 0);

const totalOverdue = paymentsData
    .filter((p) => p.status === "overdue")
    .reduce((sum, p) => sum + p.amount, 0);

const Payments = () => {
    return (
        <Content>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card>
                    <CardContent className="flex items-center gap-4 py-5">
                        <div className="bg-secondary rounded-full p-2">
                            <CheckCircle size={18} className="text-secondary-foreground" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Total Earned</p>
                            <h3 className="text-xl font-semibold">
                                ${totalEarned.toLocaleString()}
                            </h3>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="flex items-center gap-4 py-5">
                        <div className="bg-muted rounded-full p-2">
                            <Clock size={18} className="text-muted-foreground" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Pending</p>
                            <h3 className="text-xl font-semibold">
                                ${totalPending.toLocaleString()}
                            </h3>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="flex items-center gap-4 py-5">
                        <div className="bg-destructive/10 rounded-full p-2">
                            <AlertTriangle size={18} className="text-destructive" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Overdue</p>
                            <h3 className="text-xl font-semibold text-destructive">
                                ${totalOverdue.toLocaleString()}
                            </h3>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <DataTable
                columns={paymentColumns}
                data={paymentsData}
                filterColumn="clientName"
                filterPlaceholder="Filter payments by client..."
            />
        </Content>
    );
};

export default Payments;
