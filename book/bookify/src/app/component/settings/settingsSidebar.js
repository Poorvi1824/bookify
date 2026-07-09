"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { settingsMenu } from "./settingsMenu";

const SettingsSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-white border-r border-gray-200 flex-shrink-0">
      <div className="p-6">
        <h2 className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
          Settings
        </h2>

        <div className="mt-6 space-y-2">
          {settingsMenu.map((item) => {
            const Icon = item.icon;

            const active = pathname === item.href;

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`flex items-center px-4 gap-2 rounded-xl py-2 transition-all
                ${
                  active
                    ? "bg-black text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon size={18} />

                <span className="font-medium text-sm text-gray-500">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default SettingsSidebar;