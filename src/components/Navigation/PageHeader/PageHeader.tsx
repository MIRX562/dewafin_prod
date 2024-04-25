"use client";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import { usePathname } from "next/navigation";
import React from "react";

// Function to capitalize the first letter of each word in a string
const capitalizeFirstLetter = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const PageHeader = () => {
	const path = usePathname();
	const pathNames = path.split("/").filter((path) => path); // Split and filter out empty segments

	// Capitalize the first letter of each path segment and join them with a space
	const pageName = pathNames.map(capitalizeFirstLetter).join(" ");

	return (
		<div className="flex flex-col p-2 space-y-1 lg:space-y-2 lg:p-4">
			<h1 className="text-2xl font-bold">{pageName}</h1>
			<Breadcrumbs path={path} />
		</div>
	);
};

export default PageHeader;
