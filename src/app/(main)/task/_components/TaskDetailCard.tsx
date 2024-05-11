import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function TaskDetailCard() {
  return (
    <Dialog>
      <DialogTrigger />
      <DialogContent className="p-6 w-[600px] max-w-full">
        <DialogHeader>
          <DialogTitle>Finish UI design</DialogTitle>
          <DialogDescription>
            Complete the UI design for the new dashboard.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-1">
            <Label htmlFor="start-date">Start Date</Label>
            <Input defaultValue="2023-05-01" id="start-date" type="date" />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="end-date">End Date</Label>
            <Input defaultValue="2023-05-15" id="end-date" type="date" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Delete</Button>
          <Button>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
