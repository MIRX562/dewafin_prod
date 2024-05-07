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

// Utility function to get initials from a name
export function getNameInitials(name: string): string {
  const words = name.split(" "); // Split name into words

  // Extract the first letter of each word and join them to form initials
  const initials = words
    .map((word) => word.charAt(0).toUpperCase()) // Get the first letter and convert to uppercase
    .join(""); // Join the letters to form initials

  return initials;
}

interface CountMap {
  [key: string]: number;
}

export function countObjectsByProperty<T>(
  arr: T[],
  property: keyof T,
): CountMap {
  const counts: CountMap = {};

  arr.forEach((obj) => {
    const value = obj[property] as string; // Assuming property value is a string
    counts[value] = counts[value] ? counts[value] + 1 : 1;
  });

  return counts;
}
