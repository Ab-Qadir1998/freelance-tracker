import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export default function ProfileSettingsPage() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-lg font-medium">Profile</h3>
                <p className="text-sm text-muted-foreground">
                    Update your personal details and public freelance profile.
                </p>
            </div>

            <Separator />

            <form className="space-y-6">
                {/* Personal Details */}
                <div className="space-y-4">
                    <h4 className="text-sm font-semibold">Personal Details</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field>
                            <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                            <Input id="firstName" defaultValue="John" />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                            <Input id="lastName" defaultValue="Doe" />
                        </Field>
                        <Field className="col-span-1 md:col-span-2">
                            <FieldLabel htmlFor="email">Email Address</FieldLabel>
                            <Input id="email" type="email" defaultValue="john.doe@example.com" />
                        </Field>
                    </div>
                </div>

                {/* Freelance Details */}
                <div className="space-y-4 pt-4">
                    <h4 className="text-sm font-semibold">Freelance Configuration</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field>
                            <FieldLabel htmlFor="hourlyRate">Default Hourly Rate ($)</FieldLabel>
                            <Input id="hourlyRate" type="number" defaultValue="50" />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="invoicePrefix">Invoice Prefix</FieldLabel>
                            <Input id="invoicePrefix" defaultValue="INV-" />
                        </Field>
                    </div>
                </div>

                {/* Status */}
                <div className="space-y-4 pt-4">
                    <h4 className="text-sm font-semibold">Availability</h4>
                    <div className="flex items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                            <label htmlFor="availability" className="text-base font-medium">
                                Available for New Projects
                            </label>
                            <p className="text-sm text-muted-foreground">
                                Turn this off to hide your profile across platforms.
                            </p>
                        </div>
                        <Switch id="availability" defaultChecked />
                    </div>
                </div>

                <Button type="submit">Update Profile</Button>
            </form>
        </div>
    );
}
