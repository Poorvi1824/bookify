import {
  User,
  Building2,
  Settings,
  Globe,
} from "lucide-react";

export const settingsMenu = [
  {
    title: "User Profile",
    href: "/dashboard/settings/UserProfile",
    icon: User,
  },
  {
    title: "Gym Details",
    href: "/dashboard/settings/gym-details",
    icon: Building2,
  },
  {
    title: "Configuration",
    href: "/dashboard/settings/configuration",
    icon: Settings,
  },
  {
    title: "Web Config",
    href: "/dashboard/settings/web-config",
    icon: Globe,
  },
];