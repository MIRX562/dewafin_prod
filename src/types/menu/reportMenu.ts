import {
  DollarSignIcon,
  HeadsetIcon,
  LineChartIcon,
  ServerCogIcon,
} from "lucide-react";
import { Menu } from "./_menu";

export const reports: Menu[] = [
  {
    label: "Sales & Marketing Report",
    path: "/reports/sales_marketing",
    icon: DollarSignIcon,
  },
  {
    label: "Customer Support Report",
    path: "/reports/customer_support",
    icon: HeadsetIcon,
  },
  {
    label: "Technical Support Report",
    path: "/reports/technical_support",
    icon: ServerCogIcon,
  },
  {
    label: "Administration Report",
    path: "/reports/administration",
    icon: LineChartIcon,
  },
];
