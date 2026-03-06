import { AppSidebar } from "@/components/layout/app-sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/components/layout/app-header";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider>
            <TooltipProvider>
                <div className="flex w-full">
                    <AppSidebar />
                    <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
                        <Header />
                        <main className="flex-1 overflow-y-auto overflow-x-hidden">
                            {children}
                        </main>
                    </div>
                </div>
            </TooltipProvider>
        </SidebarProvider>
    );
}
