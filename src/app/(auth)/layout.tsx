import React from "react";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4">
            <div className="w-full max-w-[400px]">
                {/* Logo/Branding can go here */}
                <div className="flex justify-center mb-8">
                    <div className="flex items-center gap-2 font-bold text-2xl">
                        <div className="bg-primary text-primary-foreground p-1 rounded-md">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="size-6"
                            >
                                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                            </svg>
                        </div>
                        <span>Freelancer Tracker</span>
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
}
