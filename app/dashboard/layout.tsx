"use client";
import clsx from "clsx";
import DashboardSideNav from "../ui/dashboard/Dashboard-sideNav";
import Header from "../ui/Header";
import { usePathname } from "next/navigation";
export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const isProjectViewPage = !!pathName.match(/^\/dashboard\/projects\/\d+\/view$/);
  console.log(isProjectViewPage)
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64 fixed">
        <Header place={"dashboard"} isProjectViewPage={isProjectViewPage} />
        <DashboardSideNav isProjectViewPage={isProjectViewPage}/>
      </div>

      <div className={clsx("flex-grow p-6 md:overflow-y-auto md:p-12 max-xl:ml-0", {
        "ml-[400px]": !isProjectViewPage,
      })}>
        {children}
      </div>
    </div>
  );
}
