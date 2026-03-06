"use client"
import Content from "@/components/layout/app-content";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarNavItems = [
    {
        title: "Profile",
        href: "/settings/profile",
    },
    {
        title: "Billing & Taxes",
        href: "/settings/billing",
    },
    {
        title: "Preferences",
        href: "/settings/preferences",
    },
];

interface SettingsLayoutProps {
    children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
    return (
        <Content>
            <div className="space-y-6 lg:p-4 pb-16">
                <div className="space-y-0.5">
                    <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
                    <p className="text-muted-foreground">
                        Manage your account settings, billing information, and app preferences.
                    </p>
                </div>
                <Separator className="my-6" />
                <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                    <aside className="lg:w-1/5">
                        <SidebarNav items={sidebarNavItems} />
                    </aside>
                    <div className="flex-1 max-w-2xl">{children}</div>
                </div>
            </div>
        </Content>
    );
}

function SidebarNav({
    items,
}: {
    items: { href: string; title: string }[];
}) {
    const pathname = usePathname();

    return (
        <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1 overflow-x-auto pb-2 lg:pb-0">
            {items.map((item) => {
                const isActive = pathname === item.href;
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary ${isActive ? "bg-muted font-semibold text-primary" : "text-muted-foreground"
                            }`}
                    >
                        {item.title}
                    </Link>
                );
            })}
        </nav>
    );
}
