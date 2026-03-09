"use client";

import React, { useState } from "react";
import { notifications as allNotifications } from "@/core/mock/notifications.mock";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { Bell, Briefcase, CreditCard, CheckSquare, Users, Info } from "lucide-react";

const categoryIcons = {
    project: <Briefcase size={18} className="text-blue-500" />,
    payment: <CreditCard size={18} className="text-green-500" />,
    task: <CheckSquare size={18} className="text-orange-500" />,
    client: <Users size={18} className="text-purple-500" />,
    system: <Info size={18} className="text-slate-500" />,
};

const ITEMS_PER_PAGE = 10;

export default function NotificationsPage() {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(allNotifications.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentNotifications = allNotifications.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold flex items-center gap-2">
                        <Bell className="text-primary" />
                        Notifications
                    </h1>
                    <CardDescription>
                        Manage and view all your activity updates
                    </CardDescription>
                </div>
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                    {allNotifications.filter(n => n.unread).length} Unread
                </Badge>
            </div>

            <div className="space-y-2">
                {currentNotifications.map((notification) => (
                    <Card key={notification.id} className={`border-none ${notification.unread ? "bg-primary/5 shadow-md shadow-primary/5" : "bg-card shadow-sm border border-border/50"}`}>
                        <CardContent className=" flex gap-4">
                            <div className="mt-1">
                                {categoryIcons[notification.category]}
                            </div>
                            <div className="flex-1">
                                <div className="flex items-start justify-between mb-1">
                                    <h4 className={`font-semibold text-base ${notification.unread ? "text-foreground" : "text-muted-foreground"}`}>
                                        {notification.title}
                                    </h4>
                                    <span className="text-xs text-muted-foreground italic truncate ml-2">
                                        {notification.time}
                                    </span>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {notification.description}
                                </p>
                            </div>
                            {notification.unread && (
                                <div className="flex flex-col justify-center">
                                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Pagination */}
            <div className="mt-8">
                <Pagination className="justify-end">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handlePageChange(currentPage - 1);
                                }}
                                className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                            />
                        </PaginationItem>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <PaginationItem key={page}>
                                <PaginationLink
                                    href="#"
                                    isActive={page === currentPage}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handlePageChange(page);
                                    }}
                                    className="cursor-pointer"
                                >
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handlePageChange(currentPage + 1);
                                }}
                                className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
}
