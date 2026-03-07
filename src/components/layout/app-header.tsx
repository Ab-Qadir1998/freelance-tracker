"use client";
import React from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ThemeToggler } from "./theme-toggler";
import { usePathname } from "next/navigation";
import {
  Bell,
  ChartBar,
  CreditCard,
  FolderKanban,
  LayoutDashboard,
  List,
  Search,
} from "lucide-react";
import Link from "next/link";

const notifications = [
  {
    id: 1,
    title: "Project Milestone Reached",
    description: "E-Commerce Redesign has reached its first milestone.",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: 2,
    title: "New Payment Received",
    description: "You received a payment of $1,200 from Acme Corp.",
    time: "4 hours ago",
    unread: true,
  },
  {
    id: 3,
    title: "Task Deadline Approaching",
    description: "Finish the dashboard UI by tomorrow.",
    time: "1 day ago",
    unread: false,
  },
  {
    id: 4,
    title: "Client Message",
    description: "John Doe sent you a message about the new project.",
    time: "2 days ago",
    unread: false,
  },
  {
    id: 5,
    title: "System Update",
    description: "Freelancer Tracker has been updated to version 2.0.",
    time: "3 days ago",
    unread: false,
  },
  {
    id: 6,
    title: "New Invoice Created",
    description: "Invoice #INV-2024-001 has been generated.",
    time: "1 week ago",
    unread: false,
  }
];

const routeMap: Record<string, { label: string; icon: React.ReactNode }> = {
  "/dashboard": { label: "Dashboard", icon: <LayoutDashboard size={22} /> },
  "/clients": { label: "Clients", icon: <List size={22} /> },
  "/projects": { label: "Projects", icon: <FolderKanban size={22} /> },
  "/tasks": { label: "Tasks", icon: <ChartBar size={22} /> },
  "/payments": { label: "Payments", icon: <CreditCard size={22} /> },
  "/settings": { label: "Settings", icon: <LayoutDashboard size={22} /> },
};


const Header = () => {
  const pathName = usePathname();

  const getRouteInfo = () => {
    if (routeMap[pathName]) return routeMap[pathName];
    if (pathName.startsWith("/clients/"))
      return { label: "Client Detail", icon: <List /> };
    const base = "/" + pathName.split("/")[1];
    return routeMap[base] ?? { label: "Dashboard", icon: <LayoutDashboard /> };
  };

  const { label, icon } = getRouteInfo();

  return (
    <header className="px-5 py-3 ps-7 border-b flex items-center justify-between">
      <h2 className="text-xl capitalize flex items-center gap-2">
        <span className="p-2 rounded-full bg-gray-200 dark:bg-stone-800 text-sm">
          {icon}
        </span>
        {label}
      </h2>

      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
          onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'k', 'metaKey': true }))}
        >
          <Search className="h-4 w-4 xl:mr-2" />
          <span className="hidden xl:inline-flex text-muted-foreground text-sm">Search...</span>
          <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>

        <ThemeToggler />

        {/* Notifications Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full cursor-pointer relative"
            >
              <Bell size={20} />
              <span className="absolute top-2 right-2 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-80 p-0" align="end">
            <div className="p-4 font-medium border-b flex items-center justify-between">
              Notifications
              <span className="text-xs text-primary cursor-pointer hover:underline">Mark all as read</span>
            </div>
            <div className="max-h-80 overflow-y-auto">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="p-4 border-b last:border-0 hover:bg-slate-50 dark:hover:bg-stone-900 cursor-pointer transition-colors"
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className={`text-sm font-semibold ${notification.unread ? "text-foreground" : "text-muted-foreground"}`}>
                      {notification.title}
                    </span>
                    {notification.unread && (
                      <span className="h-2 w-2 rounded-full bg-blue-500 mt-1"></span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {notification.description}
                  </p>
                  <span className="text-[10px] text-muted-foreground mt-2 block italic">
                    {notification.time}
                  </span>
                </div>
              ))}
            </div>
            <div className="p-2 border-t text-center">
              <Button variant="ghost" className="w-full text-xs h-8" asChild>
                <Link href="/notifications">View all notifications</Link>
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full cursor-pointer"
            >
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-32">
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href="/settings/profile" className="cursor-pointer w-full">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/settings/billing" className="cursor-pointer w-full">Billing</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/settings/preferences" className="cursor-pointer w-full">Settings</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem variant="destructive" asChild>
                <Link href="/login" className="cursor-pointer w-full">Log out</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
