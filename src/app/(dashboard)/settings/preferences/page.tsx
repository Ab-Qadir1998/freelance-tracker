import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export default function PreferencesSettingsPage() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-lg font-medium">Preferences</h3>
                <p className="text-sm text-muted-foreground">
                    Customize your workspace experience and notification settings.
                </p>
            </div>

            <Separator />

            <form className="space-y-6">
                {/* Appearance */}
                <div className="space-y-4">
                    <h4 className="text-sm font-semibold">Appearance</h4>
                    <div className="flex items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                            <label htmlFor="themeSync" className="text-base font-medium">
                                Sync with System Theme
                            </label>
                            <p className="text-sm text-muted-foreground">
                                Automatically switch between light and dark mode based on your OS.
                            </p>
                        </div>
                        <Switch id="themeSync" defaultChecked />
                    </div>
                </div>

                {/* Notifications */}
                <div className="space-y-4 pt-4 border-t">
                    <h4 className="text-sm font-semibold">Notifications</h4>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5">
                                <label htmlFor="emailNotifs" className="text-base font-medium">
                                    Email Notifications
                                </label>
                                <p className="text-sm text-muted-foreground">
                                    Receive emails when an invoice is paid or overdue.
                                </p>
                            </div>
                            <Switch id="emailNotifs" defaultChecked />
                        </div>

                        <div className="flex items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5">
                                <label htmlFor="marketingNotifs" className="text-base font-medium">
                                    Marketing Emails
                                </label>
                                <p className="text-sm text-muted-foreground">
                                    Receive tips, updates, and offers about Freelance Tracker.
                                </p>
                            </div>
                            <Switch id="marketingNotifs" />
                        </div>
                    </div>
                </div>

                <Button type="submit">Save Preferences</Button>
            </form>
        </div>
    );
}
