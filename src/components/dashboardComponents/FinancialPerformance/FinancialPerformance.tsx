'use client';
import React from 'react';
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	Tooltip as RechartsTooltip,
	CartesianGrid,
	ResponsiveContainer,
} from 'recharts';

// Define types
type MonthData = {
	month: string;
	product1: number;
	product2: number;
};

// Define productSales data
const productSales: MonthData[] = [
	{
		month: 'January',
		product1: 3452,
		product2: 1298,
	},
	{
		month: 'February',
		product1: 2983,
		product2: 3849,
	},
	{
		month: 'March',
		product1: 4187,
		product2: 1235,
	},
	{
		month: 'April',
		product1: 2950,
		product2: 4873,
	},
	{
		month: 'May',
		product1: 3298,
		product2: 2761,
	},
	{
		month: 'June',
		product1: 4321,
		product2: 3684,
	},
	{
		month: 'July',
		product1: 2578,
		product2: 4987,
	},
	{
		month: 'August',
		product1: 3642,
		product2: 3241,
	},
	{
		month: 'September',
		product1: 2789,
		product2: 1987,
	},
	{
		month: 'October',
		product1: 3509,
		product2: 4213,
	},
	{
		month: 'November',
		product1: 2987,
		product2: 3621,
	},
	{
		month: 'December',
		product1: 4792,
		product2: 3156,
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
			<div className='p-4 bg-slate-900 flex flex-col gap-4 rounded-md'>
				<p className='font-medium text-lg text-white'>{label}</p>
				<p className='text-sm text-blue-400'>
					Product1:
					<span className='ml-2'>${payload[0]?.value}</span>
				</p>
				<p className='text-sm text-green-400'>
					Product2:
					<span className='ml-2'>${payload[1]?.value}</span>
				</p>
			</div>
		);
	}

	return null;
};

// Component that renders the area chart
const FinancialPerformance = () => {
	return (
		<ResponsiveContainer width='100%' height='100%'>
			<AreaChart
				data={productSales}
				height={400}
				width={500}
				margin={{ right: 30 }}>
				{/* <CartesianGrid strokeDasharray='3 3' /> */}
				<XAxis dataKey='month' />
				<YAxis />
				<RechartsTooltip
					content={<CustomTooltip active={false} payload={[]} label={''} />}
				/>
				<Area
					type='monotone'
					dataKey='product1'
					stroke='#8884d8'
					fill='#8884d8'
					stackId='1'
				/>
				<Area
					type='monotone'
					dataKey='product2'
					stroke='#82ca9d'
					fill='#82ca9d'
					stackId='1'
				/>
			</AreaChart>
		</ResponsiveContainer>
	);
};

export default FinancialPerformance;
