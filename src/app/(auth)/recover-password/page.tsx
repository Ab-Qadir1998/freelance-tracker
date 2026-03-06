"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft, LifeBuoy } from "lucide-react";

export default function RecoverPasswordPage() {
    return (
        <Card className="border-none shadow-xl shadow-slate-200/50 dark:shadow-none">
            <CardHeader className="space-y-1">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                    <LifeBuoy className="size-5 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold">Recover Account</CardTitle>
                <CardDescription>
                    If you lost access to your primary email, enter your recovery email or phone number.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="recovery-id">Recovery Email or Phone</Label>
                    <Input id="recovery-id" placeholder="recovery@example.com" />
                </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
                <Button className="w-full">Continue Recovery</Button>
                <div className="text-center text-sm text-muted-foreground">
                    <Link
                        href="/login"
                        className="flex items-center justify-center gap-1 text-primary font-medium hover:underline underline-offset-4"
                    >
                        <ChevronLeft className="size-4" />
                        Back to login
                    </Link>
                </div>
            </CardFooter>
        </Card>
    );
}
