"use client";

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

export default function ResetPasswordPage() {
    return (
        <Card className="border-none shadow-xl shadow-slate-200/50 dark:shadow-none">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">Reset Password</CardTitle>
                <CardDescription>
                    Create a new password for your account. Ensure it&apos;s strong and unique.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="confirm-new-password">Confirm New Password</Label>
                    <Input id="confirm-new-password" type="password" />
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Reset Password</Button>
            </CardFooter>
        </Card>
    );
}
