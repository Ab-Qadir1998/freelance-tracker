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
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { ChevronLeft } from "lucide-react";

export default function OTPPage() {
    return (
        <Card className="border-none shadow-xl shadow-slate-200/50 dark:shadow-none">
            <CardHeader className="space-y-1 text-center">
                <CardTitle className="text-2xl font-bold">Verify OTP</CardTitle>
                <CardDescription>
                    Enter the 6-digit code sent to your email address.
                </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center py-4">
                <InputOTP maxLength={6}>
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                    </InputOTPGroup>
                </InputOTP>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
                <Button className="w-full" asChild>
                    <Link href="/reset-password">Verify & Proceed</Link>
                </Button>
                <div className="text-center text-sm text-muted-foreground">
                    Didn&apos;t receive the code?{" "}
                    <button className="text-primary font-medium hover:underline underline-offset-4">
                        Resend
                    </button>
                </div>
                <div className="text-center text-sm text-muted-foreground">
                    <Link
                        href="/forgot-password"
                        className="flex items-center justify-center gap-1 text-primary font-medium hover:underline underline-offset-4"
                    >
                        <ChevronLeft className="size-4" />
                        Back to email entry
                    </Link>
                </div>
            </CardFooter>
        </Card>
    );
}
