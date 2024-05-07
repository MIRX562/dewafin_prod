"use client";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

// Define types
type MonthData = {
  month: string;
  revenue: number;
};

// Define productSales data
const productSales: MonthData[] = [
  {
    month: "January",
    revenue: 2154,
  },
  {
    month: "February",
    revenue: -886,
  },
  {
    month: "March",
    revenue: 2952,
  },
  {
    month: "April",
    revenue: -1923,
  },
  {
    month: "May",
    revenue: 537,
  },
  {
    month: "June",
    revenue: 637,
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
          Keuntungan:
          <span className="ml-2">Rp.{payload[0]?.value} juta</span>
        </p>
      </div>
    );
  }

  return null;
};

// Component that renders the area chart
const NetIncome = () => {
  return (
    <ResponsiveContainer width="100%" height="90%">
      <LineChart
        data={productSales}
        height={400}
        width={500}
        margin={{ right: 30 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <RechartsTooltip
          content={<CustomTooltip active={false} payload={[]} label={""} />}
        />
        <Line type="linear" dataKey="revenue" stroke="#2563eb" fill="#2563eb" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default NetIncome;
