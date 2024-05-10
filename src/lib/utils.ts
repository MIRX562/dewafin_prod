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

export function getNameInitials(name: string): string {
  const words = name.split(" ");

  const initials = words.map((word) => word.charAt(0).toUpperCase()).join("");

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
    const value = obj[property] as string;
    counts[value] = counts[value] ? counts[value] + 1 : 1;
  });

  return counts;
}

export function parseTitle(input: string, format: string = "snake") {
  let pattern;
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

  const parsedTitle = capitalizedWords.join(" ");

  return parsedTitle;
}
