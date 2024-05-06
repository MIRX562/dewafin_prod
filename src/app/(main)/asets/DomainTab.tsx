import { GlobeIcon } from "lucide-react";
import { ItemCard } from "./asssetItems";

export default function DomainTab() {
	return (
		<ItemCard
			icon={<GlobeIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />}
			title="Domains"
			data={[
				{ label: "Total", value: "5,678" },
				{ label: "Active", value: "5,123" },
				{ label: "Expired", value: "555" },
			]}
		/>
	);
}
