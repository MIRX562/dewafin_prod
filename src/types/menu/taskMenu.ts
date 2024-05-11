import {
  DollarSignIcon,
  HeadsetIcon,
  LineChartIcon,
  ServerCogIcon,
} from "lucide-react";
import { Menu } from "./_menu";

export const task: Menu[] = [
  {
    label: "Administration",
    path: "/task/administration",
    icon: LineChartIcon,
  },
  {
    label: "Sales & Marketing ",
    path: "/task/sales_marketing",
    icon: DollarSignIcon,
  },
  {
    label: "Customer Support ",
    path: "/task/customer_support",
    icon: HeadsetIcon,
  },
  {
    label: "Technical Support ",
    path: "/task/technical_support",
    icon: ServerCogIcon,
  },
];
