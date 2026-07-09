import SettingsSidebar from "@/app/component/settings/settingsSidebar";


export default function SettingsLayout({ children }) {
  return (
    <div className="flex h-full">
      <SettingsSidebar />

      <main className="flex-1 bg-[#F7F8FC] overflow-y-auto">
        <div className="p-10">
          {children}
        </div>
      </main>
    </div>
  );
}