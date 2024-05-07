"use client";
import {
  Area,
  AreaChart,
  Legend,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

// Define types
type FinancialData = {
  month: string;
  Pemasukan: number;
  Pengeluaran: number;
};

const data: FinancialData[] = [
  {
    month: "January",
    Pemasukan: 3452,
    Pengeluaran: 1298,
  },
  {
    month: "February",
    Pemasukan: 2983,
    Pengeluaran: 3849,
  },
  {
    month: "March",
    Pemasukan: 4187,
    Pengeluaran: 1235,
  },
  {
    month: "April",
    Pemasukan: 2950,
    Pengeluaran: 4873,
  },
  {
    month: "May",
    Pemasukan: 3298,
    Pengeluaran: 2761,
  },
  {
    month: "June",
    Pemasukan: 4321,
    Pengeluaran: 3684,
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
          <span className="ml-2">${payload[0]?.value} juta</span>
        </p>
        <p className="text-sm text-[#bbf7d0]">
          Pengeluaran:
          <span className="ml-2">${payload[1]?.value} juta</span>
        </p>
      </div>
    );
  }

  return null;
};

// Component that renders the area chart
const FinancialPerformance = () => {
  return (
    <ResponsiveContainer width="100%" height="90%" maxHeight={400}>
      <AreaChart data={data} height={400} width={500} margin={{ right: 30 }}>
        {/* <CartesianGrid strokeDasharray='3 3' /> */}
        <XAxis dataKey="month" />
        <YAxis />
        <RechartsTooltip
          content={<CustomTooltip active={false} payload={[]} label={""} />}
        />
        <Area
          type="monotone"
          dataKey="Pemasukan"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="Pengeluaran"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Legend />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default FinancialPerformance;
