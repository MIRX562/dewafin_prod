import { GearIcon, PersonIcon } from "@radix-ui/react-icons";

export const userRoles = [
  {
    value: "ADMIN",
    label: "Admin",
    icon: GearIcon,
  },
  {
    value: "USER",
    label: "User",
    icon: PersonIcon,
  },
];

export const state = [
  {
    value: true,
    label: "Enabled",
    var: "success",
  },
  {
    value: false,
    label: "Disabled",
    var: "destructive",
  },
];

export const status = [
  {
    value: "Active",
    label: "Active",
    var: "success",
  },
  {
    value: "Not_Active",
    label: "Not Active",
    var: "destructive",
  },
];
