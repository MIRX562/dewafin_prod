import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatFileSize(bytes: number) {
	if (typeof bytes !== "number" || bytes < 0) return "Invalid file size";

	const units = ["B", "KB", "MB", "GB", "TB"];
	let threshold = 1024;
	let i = 0;

	while (bytes >= threshold && i < units.length - 1) {
		bytes /= threshold;
		i++;
	}

	return `${bytes.toFixed(1)} ${units[i]}`;
}
