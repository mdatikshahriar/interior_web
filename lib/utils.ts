import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCategory(cat: string) {
  const map: Record<string, string> = {
    residential: "Residential",
    commercial: "Commercial",
    "farm-nature": "Farm & Nature",
  };
  return map[cat] ?? cat;
}
