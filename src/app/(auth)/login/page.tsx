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
import { Checkbox } from "@/components/ui/checkbox";

export default function LoginPage() {
    return (
        <Card className="border-none shadow-xl shadow-slate-200/50 dark:shadow-none">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">Login</CardTitle>
                <CardDescription>
                    Enter your email and password to access your account
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                </div>
                <div className="flex items-center justify-between space-x-2">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="remember" />
                        <Label
                            htmlFor="remember"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Remember me
                        </Label>
                    </div>
                    <Link
                        href="/forgot-password"
                        className="text-sm font-medium text-primary hover:underline underline-offset-4"
                    >
                        Forgot password?
                    </Link>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
                <Button asChild className="w-full">
                    <Link href="/dashboard">Login</Link>
                </Button>
                <div className="text-center text-sm text-muted-foreground">
                    Don&apos;t have an account?{" "}
                    <Link
                        href="/register"
                        className="text-primary font-medium hover:underline underline-offset-4"
                    >
                        Register
                    </Link>
                </div>
            </CardFooter>
        </Card>
    );
}
