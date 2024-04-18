'use client';
import React from 'react';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip as RechartsTooltip,
	CartesianGrid,
	ResponsiveContainer,
} from 'recharts';

// Define types
type MonthData = {
	month: string;
	revenue: number;
	expenses: number;
};

// Define productSales data
const productSales: MonthData[] = [
	{
		month: 'January',
		revenue: 3452,
		expenses: 1298,
	},
	{
		month: 'February',
		revenue: 2983,
		expenses: 3849,
	},
	{
		month: 'March',
		revenue: 4187,
		expenses: 1235,
	},
	{
		month: 'April',
		revenue: 2950,
		expenses: 4873,
	},
	{
		month: 'May',
		revenue: 3298,
		expenses: 2761,
	},
	{
		month: 'June',
		revenue: 4321,
		expenses: 3684,
	},
];

// Define custom tooltip type
type CustomTooltipProps = {
	active: boolean;
	payload: { value: number }[];
	label: string;
};

// Component for custom tooltip
const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
	if (active && label && payload && payload.length) {
		return (
			<div className='p-4 bg-slate-100 dark:bg-slate-900 flex flex-col gap-4 rounded-md'>
				<p className='font-medium text-lg text-primary dark:text-white'>
					{label}
				</p>
				<p className='text-sm text-blue-400'>
					Keuntungan:
					<span className='ml-2'>Rp.{payload[0]?.value}</span>
				</p>
			</div>
		);
	}

	return null;
};

// Component that renders the area chart
const NetIncome = () => {
	return (
		<ResponsiveContainer width='100%' height='100%'>
			<LineChart
				data={productSales}
				height={400}
				width={500}
				margin={{ right: 30, bottom: 30 }}>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis dataKey='month' />
				<YAxis />
				<RechartsTooltip
					content={<CustomTooltip active={false} payload={[]} label={''} />}
				/>
				<Line
					type='monotone'
					dataKey='revenue'
					stroke='#8884d8'
					fill='#8884d8'
				/>
			</LineChart>
		</ResponsiveContainer>
	);
};

export default NetIncome;
