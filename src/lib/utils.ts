import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines CSS class names using clsx and tailwind-merge.
 * @param inputs Class names or arrays of class names to be combined.
 * @returns Combined class string.
 */
export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}

/**
 * Formats a file size from bytes to a human-readable string.
 * @param bytes Number of bytes representing the file size.
 * @returns Formatted file size string (e.g., "1.5 MB").
 */
export function formatFileSize(bytes: number): string {
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

/**
 * Returns the initials from a name string.
 * @param name The full name string.
 * @returns Initials extracted from the name (e.g., "JD" for "John Doe").
 */
export function getNameInitials(name: string): string {
	const words = name.split(" ");
	const initials = words.map((word) => word.charAt(0).toUpperCase()).join("");
	return initials;
}

/**
 * Counts the occurrences of each unique property value in an array of objects.
 * @param arr Array of objects.
 * @param property Key of the property to count within each object.
 * @returns Object containing counts for each unique property value.
 */
interface CountMap {
	[key: string]: number;
}

export function countObjectsByProperty<T extends Record<string, any>>(
	arr: T[],
	property: keyof T
): CountMap {
	const counts: CountMap = {};

	arr.forEach((obj) => {
		const value = obj[property] as string;
		counts[value] = counts[value] ? counts[value] + 1 : 1;
	});

	return counts;
}

/**
 * Converts a string with any naming convention (snake_case, kebab-case, camelCase, PascalCase, URL encoded) into a readable title format.
 * @param input The input string to convert.
 * @returns A formatted title string.
 */
export function parseTitle(input: string): string {
	// Replace URL-encoded characters (e.g., %20) with spaces
	const decodedInput = decodeURIComponent(input);

	// Create a regular expression pattern to match various delimiters and case transitions
	const pattern = /[_\-\s]+|(?=[A-Z])|%20/;

	// Split the input string based on the pattern
	const words = decodedInput.split(pattern);

	// Capitalize the first letter of each word and lowercase the rest
	const capitalizedWords = words.map((word) => {
		return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
	});

	// Join the words with spaces to form the final title
	return capitalizedWords.join(" ");
}

/**
 * Convert the input date into relative human readable date
 * @param  inputDate:string
 * @returns string of relative value
 */
type RelativeTimeUnit = "second" | "minute" | "hour" | "day" | "month" | "year";

export function formatRelativeDate(date: Date): string {
	const currentDate = new Date();

	const seconds = Math.floor((currentDate.getTime() - date.getTime()) / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);
	const months = Math.floor(days / 30);
	const years = Math.floor(days / 365);

	const getTimeAgoString = (value: number, unit: RelativeTimeUnit): string => {
		return `${value} ${unit}${value !== 1 ? "s" : ""} ago`;
	};

	if (seconds < 60) {
		return "Just now";
	} else if (minutes < 60) {
		return getTimeAgoString(minutes, "minute");
	} else if (hours < 24) {
		return getTimeAgoString(hours, "hour");
	} else if (days < 30) {
		return getTimeAgoString(days, "day");
	} else if (months < 12) {
		return getTimeAgoString(months, "month");
	} else {
		return getTimeAgoString(years, "year");
	}
}

/**
 * Represents a date range string.
 */
export type DateRangeString = string;

/**
 * Generates a date range string in the format "start date - end date".
 * @param startDate The start date of the range.
 * @param endDate The end date of the range.
 * @returns A formatted date range string.
 */
export function getDateRangeString(
	startDate: Date,
	endDate: Date
): DateRangeString {
	// Format start date and end date into readable strings
	const startDateString = formatDate(startDate);
	const endDateString = formatDate(endDate);

	// Construct the date range string
	const dateRangeString = `${startDateString} - ${endDateString}`;

	return dateRangeString;
}

/**
 * Formats a date object into a string in the format "Month Day, Year".
 * @param date The date object to format.
 * @returns A formatted date string.
 */
export function formatDate(date: Date): string {
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	return date.toLocaleDateString("id", options);
}

/**
 * Formats a date object into a string in the format "Month Day, Year".
 * @param date The date object to format.
 * @returns A formatted date string.
 */
export function formatMonthYear(date: Date): string {
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
	};

	return date.toLocaleDateString("id", options);
}

/**
 * Formats a date object into a time string in the format "HH:MM AM/PM".
 * @param date The date object to format.
 * @returns A formatted time string.
 */
export function formatTime(date: Date): string {
	const options: Intl.DateTimeFormatOptions = {
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	};

	return date.toLocaleTimeString("id", options);
}

/**
 * Parses a date and returns a string representing the time if the date is within the past 24 hours,
 * or the date in "Month Day, Year" format if it is more than 24 hours ago.
 * @param date The date to parse.
 * @returns A formatted string representing the time or the date.
 */
export function parseDate(date: Date): string {
	const now = new Date();
	const timeDifference = now.getTime() - date.getTime();
	const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

	if (timeDifference < oneDayInMilliseconds) {
		// Return the time if the date is within the past 24 hours
		return formatTime(date);
	} else {
		// Return the date if it is more than 24 hours ago
		return formatDate(date);
	}
}

/**
 * Represents a duration string.
 */
export type DurationString = string;

/**
 * Calculates the duration between two dates and returns a formatted string representing the difference in time.
 * @param startDate The start date of the duration.
 * @param endDate The end date of the duration.
 * @returns A formatted string representing the duration between the two dates.
 */
export function calculateDuration(
	startDate: Date,
	endDate: Date
): DurationString {
	const durationMilliseconds = Math.abs(
		endDate.getTime() - startDate.getTime()
	);

	const seconds = Math.floor(durationMilliseconds / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);

	if (days > 0) {
		return `${days} day${days !== 1 ? "s" : ""}`;
	} else if (hours > 0) {
		return `${hours} hour${hours !== 1 ? "s" : ""}`;
	} else if (minutes > 0) {
		return `${minutes} minute${minutes !== 1 ? "s" : ""}`;
	} else {
		return `${seconds} second${seconds !== 1 ? "s" : ""}`;
	}
}

/**
 * Parses a currency string and converts it to a number.
 * @param currencyStr The currency string to parse.
 * @returns The numeric value of the currency string.
 */
export function parseCurrency(currencyStr: string | undefined): number | null {
	if (!currencyStr) {
		return null;
	}

	// Remove currency symbols, commas, and extra spaces
	const cleanedStr = currencyStr.replace(/[^\d-]/g, "").trim();

	// Convert to a number
	const value = parseFloat(cleanedStr);

	// Check if the conversion was successful
	if (isNaN(value)) {
		return null;
	}

	return value;
}

/**
 * Converts a number to a formatted currency string.
 * @param value The numeric value to format.
 * @returns The formatted currency string.
 */
export function formatCurrency(value: number | null | bigint): string {
	if (value === null) {
		return "";
	}

	return new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
		minimumFractionDigits: 0,
	}).format(value);
}

/**
 * Gets the current month and year as a localized string.
 * @returns A string representing the current month and year.
 */
export function getCurrentMonthAndYear(): string {
	const currentDate = new Date();
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
	};
	return currentDate.toLocaleDateString("id", options);
}

/**
 * Generates the last date of the previous month and the last date of the inputted date.
 * @param date - The input date as a Date object.
 * @returns A string representing the last date of the previous month and the last date of the inputted date.
 */
export function generateReportDateRange(date: Date): string {
	// Get the last date of the input month
	const lastDateOfInputMonth = new Date(
		date.getFullYear(),
		date.getMonth() + 1,
		0
	);

	// Get the last date of the previous month
	const lastDateOfPreviousMonth = new Date(
		date.getFullYear(),
		date.getMonth(),
		0
	);

	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	const lastDateOfInputMonthString = lastDateOfInputMonth.toLocaleDateString(
		undefined,
		options
	);
	const lastDateOfPreviousMonthString =
		lastDateOfPreviousMonth.toLocaleDateString(undefined, options);

	return `${lastDateOfPreviousMonthString} - ${lastDateOfInputMonthString}`;
}
