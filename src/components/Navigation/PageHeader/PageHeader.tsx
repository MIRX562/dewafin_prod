"use client";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import { usePathname } from "next/navigation";

const PageHeader = () => {
  const path = usePathname();

  return (
    <div className="flex flex-col p-1 lg:p-4">
      <Breadcrumbs path={path} />
    </div>
  );
};

export default PageHeader;
