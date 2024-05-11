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
  property: keyof T,
): CountMap {
  const counts: CountMap = {};

  arr.forEach((obj) => {
    const value = obj[property] as string;
    counts[value] = counts[value] ? counts[value] + 1 : 1;
  });

  return counts;
}

/**
 * Parses a title string into a specified format.
 * @param input The input title string.
 * @param format The desired output format ('snake', 'kebab', 'camel', 'pascal').
 * @returns Parsed title string in the specified format.
 * @throws Error if an unsupported format is provided.
 */
export function parseTitle(
  input: string,
  format: "snake" | "kebab" | "camel" | "pascal" = "snake",
): string {
  let pattern: RegExp;

  switch (format) {
    case "snake":
      pattern = /_/;
      break;
    case "kebab":
      pattern = /-/;
      break;
    case "camel":
      pattern = /(?=[A-Z])/;
      break;
    case "pascal":
      pattern = /(?=[A-Z][a-z])/;
      break;
    default:
      throw new Error(`Unsupported format: ${format}`);
  }

  const words = input.split(pattern);
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return capitalizedWords.join(" ");
}

// utils/dateUtils.ts

/**
 * Convert the input date into relative human readable date
 * @param  inputDate:string
 * @returns string of relative value
 */
type RelativeTimeUnit = "second" | "minute" | "hour" | "day" | "month" | "year";

export function formatRelativeDate(inputDate: string): string {
  const date = new Date(inputDate);
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
