import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

type CardData = {
  label: string;
  value: string;
};

type CardProps = {
  icon: React.ReactNode;
  title: string;
  data: CardData[];
};

export const ItemCard = ({ icon, title, data }: CardProps) => (
  <Card>
    <CardHeader className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <Link
        className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
        href="#"
      >
        View Details
      </Link>
    </CardHeader>
    <CardContent className="grid gap-2">
      {data.map(({ label, value }: CardData) => (
        <div key={label} className="flex items-center justify-between">
          <span className="text-sm font-medium">{label}</span>
          <span className="text-lg font-semibold">{value}</span>
        </div>
      ))}
    </CardContent>
  </Card>
);
