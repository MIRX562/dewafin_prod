import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CategoryForm() {
	return (
		<div>
			<form className="grid gap-4">
				<div className="grid gap-2">
					<Label htmlFor="category-name">Category Name</Label>
					<Input
						id="category-name"
						placeholder="Enter category name"
					/>
				</div>
				<div className="grid gap-2">
					<Label htmlFor="category-description">Description</Label>
					<Textarea
						id="category-description"
						placeholder="Enter category description"
					/>
				</div>
				<div className="flex justify-end">
					<Button
						size="sm"
						type="submit"
					>
						Save Category
					</Button>
				</div>
			</form>
		</div>
	);
}
