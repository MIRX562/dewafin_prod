import { DatabaseIcon } from "lucide-react";
import { ItemCard } from "../_components/asssetItems";

export default function StorageTab() {
	return (
		<ItemCard
			icon={
				<DatabaseIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
			}
			title="Storage"
			data={[
				{ label: "Total", value: "50 TB" },
				{ label: "Used", value: "35 TB" },
				{ label: "Available", value: "15 TB" },
			]}
		/>
	);
}
