import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertPropertiesToString(obj?: Record<string, unknown>) {
  if (!obj) return {};

  const result: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "number") {
      result[key] = String(value);
    } else if (
      typeof value === "object" &&
      value !== null &&
      !(value instanceof Date)
    ) {
      result[key] = convertPropertiesToString(value as Record<string, unknown>);
    } else {
      result[key] = value;
    }
  }

  return result;
}
