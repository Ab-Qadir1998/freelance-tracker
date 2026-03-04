import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";

type DialogProps = {
  trigger: ReactNode;
  submitTrigger?: ReactNode;
  title?: string;
  description?: string;
  children: ReactNode;
};

export function AppModal({
  trigger,
  title,
  description,
  children,
  submitTrigger,
}: DialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-sm">
        {(title || description) && (
          <DialogHeader>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
        )}

        <div className="-mx-4 max-h-[50vh] overflow-y-auto px-4">
          {children}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
          {submitTrigger}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
