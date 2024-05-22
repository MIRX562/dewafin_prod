import { formatCurrency } from "@/lib/utils";

interface SummaryItemProps {
	label: string;
	value: bigint;
}

const Summaryitem: React.FC<SummaryItemProps> = ({ label, value }) => (
	<div className="flex flex-col md:items-center md:justify-center">
		<p className="text-gray-500 dark:text-gray-400">{label}</p>
		<p
			className={`text-xl md:text-2xl font-bold ${value < 0 ? "text-destructive" : ""}`}
		>
			{formatCurrency(value)}
		</p>
	</div>
);

export default Summaryitem;
