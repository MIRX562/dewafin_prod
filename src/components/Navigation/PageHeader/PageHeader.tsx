"use client";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";

const PageHeader = () => {
	const path = usePathname();

	return (
		<div className="flex flex-col">
			<Breadcrumbs path={path} />
			<Separator />
		</div>
	);
};

export default PageHeader;
