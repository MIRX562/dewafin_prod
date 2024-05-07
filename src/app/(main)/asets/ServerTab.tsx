import { ServerIcon } from "lucide-react";
import { ItemCard } from "./asssetItems";

export default function ServerTab() {
  return (
    <ItemCard
      icon={<ServerIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />}
      title="Servers"
      data={[
        { label: "Total", value: "1,234" },
        { label: "Online", value: "1,123" },
        { label: "Offline", value: "111" },
      ]}
    />
  );
}
