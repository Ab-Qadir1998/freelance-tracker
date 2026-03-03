"use client";
import React from "react";
import { Field } from "../ui/field";
import { Input } from "../ui/input";
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
import { ChartBar, CreditCard, LayoutDashboard, List } from "lucide-react";

const Header = () => {
  const pathName = usePathname();

  const renderIcon = () => {
    return (
      <>
        {pathName === "/dashboard" && <LayoutDashboard />}
        {pathName === "/clients" && <List />}
        {pathName === "/tasks" && <ChartBar />}
        {pathName === "/payments" && <CreditCard />}
      </>
    );
  };

  return (
    <header className="px-5 py-3 ps-7 border-b flex items-center justify-between">
      {/* <Field orientation="horizontal" className="w-100">
        <Input type="search" placeholder="Search..." />
        <Button className="cursor-pointer">Search</Button>
      </Field> */}
      <h2 className="text-xl capitalize flex items-center gap-2">
        {renderIcon()}
        {pathName?.slice(1) || "Dashboard"}
      </h2>

      <div className=" flex items-center gap-3">
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
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem variant="destructive">Log out</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
