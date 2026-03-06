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
  ChartBar,
  CreditCard,
  FolderKanban,
  LayoutDashboard,
  List,
} from "lucide-react";
import Link from "next/link";

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
        <ThemeToggler />

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
