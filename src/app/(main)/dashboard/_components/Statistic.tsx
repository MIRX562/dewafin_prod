import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type StatisticItemProps = { value: string; label: string };

const Statistics = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Statistics</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid grid-cols-2 gap-4">
					<StatisticItem
						value="42"
						label="Total Notes"
					/>
					<StatisticItem
						value="18"
						label="Completed Tasks"
					/>
					<StatisticItem
						value="7"
						label="Overdue Tasks"
					/>
					<StatisticItem
						value="95%"
						label="Task Completion"
					/>
				</div>
			</CardContent>
		</Card>
	);
};

const StatisticItem = ({ value, label }: StatisticItemProps) => (
	<div className="flex flex-col items-start gap-2">
		<div className="text-2xl font-bold">{value}</div>
		<div className="text-sm text-gray-500">{label}</div>
	</div>
);

export default Statistics;
