"use client";
import { parseTitle } from "@/lib/utils";
import { usePathname } from "next/navigation";

const HeaderTitle = () => {
  const path = usePathname();
  const pathNames = path.split("/");
  const title = parseTitle(pathNames[1]);

  return (
    <h1 className="text-secondary-foreground text-3xl font-bold">{title}</h1>
  );
};

export default HeaderTitle;
