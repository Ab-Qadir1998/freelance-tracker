"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
    LayoutDashboard,
    Users,
    FolderKanban,
    CheckSquare,
    PlusCircle,
    Search,
    BarChart3,
} from "lucide-react"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"

export function CommandMenu() {
    const [open, setOpen] = React.useState(false)
    const [mounted, setMounted] = React.useState(false)
    const router = useRouter()

    React.useEffect(() => {
        setMounted(true)
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    if (!mounted) return null

    const runCommand = React.useCallback((command: () => void) => {
        setOpen(false)
        // Delay navigation slightly to ensure the dialog close animation starts and doesn't block
        setTimeout(() => {
            command()
        }, 10)
    }, [])

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Navigation">
                    <CommandItem
                        value="Dashboard"
                        onSelect={() => runCommand(() => router.push("/dashboard"))}
                        className="cursor-pointer rounded-sm transition-colors"
                    >
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        <span>Dashboard</span>
                    </CommandItem>
                    <CommandItem
                        value="Analytics"
                        onSelect={() => runCommand(() => router.push("/analytics"))}
                        className="cursor-pointer rounded-sm transition-colors"
                    >
                        <BarChart3 className="mr-2 h-4 w-4" />
                        <span>Analytics</span>
                    </CommandItem>
                    <CommandItem
                        value="Clients"
                        onSelect={() => runCommand(() => router.push("/clients"))}
                        className="cursor-pointer rounded-sm transition-colors"
                    >
                        <Users className="mr-2 h-4 w-4" />
                        <span>Clients</span>
                    </CommandItem>
                    <CommandItem
                        value="Projects"
                        onSelect={() => runCommand(() => router.push("/projects"))}
                        className="cursor-pointer rounded-sm transition-colors"
                    >
                        <FolderKanban className="mr-2 h-4 w-4" />
                        <span>Projects</span>
                    </CommandItem>
                    <CommandItem
                        value="Tasks"
                        onSelect={() => runCommand(() => router.push("/tasks"))}
                        className="cursor-pointer rounded-sm transition-colors"
                    >
                        <CheckSquare className="mr-2 h-4 w-4" />
                        <span>Tasks</span>
                    </CommandItem>
                    <CommandItem
                        value="Payments"
                        onSelect={() => runCommand(() => router.push("/payments"))}
                        className="cursor-pointer rounded-sm transition-colors"
                    >
                        <CreditCard className="mr-2 h-4 w-4" />
                        <span>Payments</span>
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                    <CommandItem
                        value="Profile"
                        onSelect={() => runCommand(() => router.push("/settings/profile"))}
                        className="cursor-pointer rounded-sm transition-colors"
                    >
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                    </CommandItem>
                    <CommandItem
                        value="Billing"
                        onSelect={() => runCommand(() => router.push("/settings/billing"))}
                        className="cursor-pointer rounded-sm transition-colors"
                    >
                        <CreditCard className="mr-2 h-4 w-4" />
                        <span>Billing</span>
                    </CommandItem>
                    <CommandItem
                        value="Settings"
                        onSelect={() => runCommand(() => router.push("/settings/preferences"))}
                        className="cursor-pointer rounded-sm transition-colors"
                    >
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    )
}
