import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function HostingForm() {
	return (
		<div>
			<form className="grid gap-4">
				<div className="grid gap-2">
					<Label htmlFor="plan-name">Plan Name</Label>
					<Input placeholder="Enter plan name" />
				</div>
				<div className="grid gap-2">
					<Label htmlFor="plan-description">Description</Label>
					<Textarea placeholder="Enter plan description" />
				</div>
				<div className="grid grid-cols-2 gap-4">
					<div className="grid gap-2">
						<Label htmlFor="plan-price">Price</Label>
						<Input
							placeholder="Enter price"
							type="number"
						/>
					</div>
					<div className="grid gap-2">
						<Label htmlFor="plan-category">Category</Label>
						<Select>
							<SelectTrigger>
								<SelectValue placeholder="Select category" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="basic">Basic</SelectItem>
								<SelectItem value="enterprise">Enterprise</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<div className="grid gap-2">
						<Label htmlFor="plan-storage">Storage</Label>
						<Input
							placeholder="Enter storage"
							type="number"
						/>
					</div>
					<div className="grid gap-2">
						<Label htmlFor="plan-ram">RAM</Label>
						<Input
							placeholder="Enter RAM"
							type="number"
						/>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<div className="grid gap-2">
						<Label htmlFor="plan-cpu">CPU Cores</Label>
						<Input
							placeholder="Enter CPU cores"
							type="number"
						/>
					</div>
					<div className="grid gap-2">
						<Label htmlFor="plan-bandwidth">Bandwidth</Label>
						<Select>
							<SelectTrigger>
								<SelectValue placeholder="Select bandwidth" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="unlimited">Unlimited</SelectItem>
								<SelectItem value="10tb">10 TB</SelectItem>
								<SelectItem value="20tb">20 TB</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
				<div className="flex justify-end">
					<Button
						size="sm"
						type="submit"
					>
						Save Plan
					</Button>
				</div>
			</form>
		</div>
	);
}
