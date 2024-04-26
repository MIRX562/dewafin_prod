"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Define types
type FinancialData = {
  month: string;
  revenue: number;
  expenses: number;
};

const data: FinancialData[] = [
  {
    month: "January",
    revenue: 3452,
    expenses: 1298,
  },
  {
    month: "February",
    revenue: 2983,
    expenses: 3849,
  },
  {
    month: "March",
    revenue: 4187,
    expenses: 1235,
  },
  {
    month: "April",
    revenue: 2950,
    expenses: 4873,
  },
  {
    month: "May",
    revenue: 3298,
    expenses: 2761,
  },
  {
    month: "June",
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
      <div className="p-4 bg-slate-100 dark:bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="font-medium text-lg text-primary dark:text-white">
          {label}
        </p>
        <p className="text-sm text-blue-400">
          Pemasukan:
          <span className="ml-2">${payload[0]?.value}</span>
        </p>
        <p className="text-sm text-green-400">
          Pengeluaran:
          <span className="ml-2">${payload[1]?.value}</span>
        </p>
      </div>
    );
  }

  return null;
};

// Component that renders the area chart
const FinancialPerformance = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        height={400}
        width={500}
        margin={{ right: 30, bottom: 30 }}
      >
        {/* <CartesianGrid strokeDasharray='3 3' /> */}
        <XAxis dataKey="month" />
        <YAxis />
        <RechartsTooltip
          content={<CustomTooltip active={false} payload={[]} label={""} />}
        />
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#8884d8"
          fill="#8884d8"
          stackId="1"
        />
        <Area
          type="monotone"
          dataKey="expenses"
          stroke="#82ca9d"
          fill="#82ca9d"
          stackId="1"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default FinancialPerformance;
