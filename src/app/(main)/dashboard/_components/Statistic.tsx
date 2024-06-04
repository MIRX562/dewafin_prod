"use client";
import Loading from "@/app/loading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getStatistics, StatisticsData } from "@/data/dashboard";
import { useEffect, useState } from "react";

type StatisticItemProps = { value: string; label: string };

const Statistics = () => {
	const [stats, setStats] = useState<StatisticsData | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const data = await getStatistics();
			setStats(data);
		};

		fetchData();
	}, []);

	if (!stats) {
		return (
			<Card className="flex-1 min-w-[350px]">
				<CardHeader>
					<CardTitle>Statistics</CardTitle>
				</CardHeader>
				<CardContent>
					<Loading />
				</CardContent>
			</Card>
		);
	}

	return (
		<Card className="flex-1 min-w-[350px]">
			<CardHeader>
				<CardTitle>Statistics</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="flex flex-wrap gap-4">
					<StatisticItem
						value={stats.totalNotes.toString()}
						label="Total Notes"
					/>
					<StatisticItem
						value={stats.completedTasks.toString()}
						label="Completed Tasks"
					/>
					<StatisticItem
						value={stats.overdueTasks.toString()}
						label="Overdue Tasks"
					/>
					<StatisticItem
						value={stats.taskCompletionRate}
						label="Task Completion"
					/>
				</div>
			</CardContent>
		</Card>
	);
};

const StatisticItem = ({ value, label }: StatisticItemProps) => (
	<div className="flex flex-col items-start gap-2 min-w-[calc(50%-1rem)]">
		<div className="text-2xl font-bold">{value}</div>
		<div className="text-sm text-gray-500">{label}</div>
	</div>
);

export default Statistics;
