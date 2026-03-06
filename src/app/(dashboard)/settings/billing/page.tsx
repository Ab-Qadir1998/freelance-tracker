"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Download, Plus } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import React from "react";

export default function BillingSettingsPage() {
    const [payoutMethod, setPayoutMethod] = React.useState("bank");

    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-lg font-medium">Billing & Taxes</h3>
                <p className="text-sm text-muted-foreground">
                    Manage your payout methods, tax information, and downloaded invoices.
                </p>
            </div>

            <Separator />

            <div className="space-y-6">
                {/* Payment Methods */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold">Payout Methods</h4>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline" size="sm">
                                    <Plus size={14} className="mr-1" /> Add Method
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Add Payout Method</DialogTitle>
                                    <DialogDescription>
                                        Choose your preferred payout method and enter the details below.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <Field>
                                        <FieldLabel>Method Type</FieldLabel>
                                        <Select
                                            defaultValue="bank"
                                            onValueChange={(value) => setPayoutMethod(value)}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select a method" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="bank">Bank Transfer</SelectItem>
                                                <SelectItem value="paypal">PayPal</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </Field>

                                    {payoutMethod === "bank" ? (
                                        <>
                                            <Field>
                                                <FieldLabel htmlFor="bankName">Bank Name</FieldLabel>
                                                <Input id="bankName" placeholder="e.g. Citibank" />
                                            </Field>
                                            <Field>
                                                <FieldLabel htmlFor="accountNumber">Account Number</FieldLabel>
                                                <Input id="accountNumber" placeholder="**** **** **** 1234" />
                                            </Field>
                                            <Field>
                                                <FieldLabel htmlFor="routingNumber">Routing Number</FieldLabel>
                                                <Input id="routingNumber" placeholder="123456789" />
                                            </Field>
                                        </>
                                    ) : (
                                        <Field>
                                            <FieldLabel htmlFor="paypalEmail">PayPal Email</FieldLabel>
                                            <Input id="paypalEmail" type="email" placeholder="john.doe@example.com" />
                                        </Field>
                                    )}
                                </div>
                                <DialogFooter>
                                    <Button type="submit">Save Payout Method</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                        <Card className="border-border">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Bank Transfer
                                </CardTitle>
                                <CreditCard className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <p className="text-xs font-medium">Citibank ****5543</p>
                                <p className="text-xs text-muted-foreground mt-1">Default Method</p>
                            </CardContent>
                        </Card>
                        <Card className="border-border opacity-60">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">
                                    PayPal
                                </CardTitle>
                                <CreditCard className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <p className="text-xs font-medium">john.doe@example.com</p>
                                <p className="text-xs text-muted-foreground mt-1">Secondary</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Tax Information */}
                <div className="space-y-4 pt-4 border-t">
                    <h4 className="text-sm font-semibold">Tax Information</h4>
                    <p className="text-sm text-muted-foreground">
                        This information will be printed on invoices you generate.
                    </p>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field className="col-span-1 md:col-span-2">
                            <FieldLabel htmlFor="legalName">Legal Business Name</FieldLabel>
                            <Input id="legalName" defaultValue="John Doe Designs LLC" />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="vatId">VAT / Tax ID</FieldLabel>
                            <Input id="vatId" defaultValue="GB 123 4567 89" />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="country">Country of Residence</FieldLabel>
                            <Input id="country" defaultValue="United Kingdom" />
                        </Field>
                        <div className="col-span-1 md:col-span-2 mt-2">
                            <Button type="submit">Save Tax Info</Button>
                        </div>
                    </form>
                </div>

                {/* Recent Platform Invoices */}
                <div className="space-y-4 pt-4 border-t">
                    <h4 className="text-sm font-semibold">Platform Invoices</h4>
                    <div className="space-y-2">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between p-3 border rounded-md">
                                <div className="flex items-center gap-3">
                                    <div className="bg-secondary p-2 rounded-md">
                                        <Download size={14} className="text-secondary-foreground" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Invoice #00{i}</p>
                                        <p className="text-xs text-muted-foreground">March 1, 2026</p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="sm">Download PDF</Button>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

