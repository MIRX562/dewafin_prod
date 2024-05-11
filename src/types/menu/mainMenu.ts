import {
  AreaChartIcon,
  BoxesIcon,
  FolderDotIcon,
  NotebookTextIcon,
  ScrollTextIcon,
  ServerIcon,
  SettingsIcon,
  SquareGanttChart,
  UserCogIcon,
  UserIcon,
} from "lucide-react";
import { Menu } from "./_menu";

export const navItems: Menu[] = [
  {
    icon: AreaChartIcon,
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: ServerIcon,
    label: "Task Manager",
    path: "/task",
  },
  {
    icon: ServerIcon,
    label: "Assets",
    path: "/asets",
  },
  {
    icon: SquareGanttChart,
    label: "Reports",
    path: "/reports",
  },
  {
    icon: BoxesIcon,
    label: "Products",
    path: "/products",
  },
  {
    icon: NotebookTextIcon,
    label: "Notes",
    path: "/notes",
  },
  {
    icon: FolderDotIcon,
    label: "Files",
    path: "/files",
  },
  {
    icon: UserIcon,
    label: "Employees",
    path: "/employees",
  },
  {
    icon: UserCogIcon,
    label: "Users",
    path: "/users",
  },
  {
    icon: SettingsIcon,
    label: "Setting",
    path: "/settings",
  },
  {
    icon: ScrollTextIcon,
    label: "Logs",
    path: "/logs",
  },
];
