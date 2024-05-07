export type Tabs = {
	value: string;
	label: string;
};

export const assetTabs: Tabs[] = [
	{ value: "all", label: "All" },
	{ value: "server", label: "Servers" },
	{ value: "domain", label: "Domains" },
	{ value: "bandwidth", label: "Bandwidth" },
	{ value: "storage", label: "Storage" },
];
