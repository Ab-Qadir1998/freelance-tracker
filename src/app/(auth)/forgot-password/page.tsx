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
import { ChevronLeft } from "lucide-react";

export default function ForgotPasswordPage() {
    return (
        <Card className="border-none shadow-xl shadow-slate-200/50 dark:shadow-none">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">Forgot password?</CardTitle>
                <CardDescription>
                    Enter your email address and we&apos;ll send you a link to reset your password.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" />
                </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
                <Button className="w-full" asChild>
                    <Link href="/otp">Send Reset Link</Link>
                </Button>
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
