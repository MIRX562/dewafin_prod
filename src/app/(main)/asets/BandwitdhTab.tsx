import { NetworkIcon } from "lucide-react";
import { ItemCard } from "./asssetItems";

export default function BandwitdhTab() {
	return (
		<ItemCard
			icon={
				<NetworkIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
			}
			title="Bandwidth"
			data={[
				{ label: "Total", value: "10 TB" },
				{ label: "Used", value: "7.5 TB" },
				{ label: "Available", value: "2.5 TB" },
			]}
		/>
	);
}
