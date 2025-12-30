import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Currency helpers
export const USD_TO_NGN = 1500; // 1 USD = ₦1,500

export function usdToNgn(amountUsd: number, rate: number = USD_TO_NGN): number {
  return Math.round(amountUsd * rate);
}

export function formatNaira(amountNgn: number): string {
  // Use en-NG for formatting, ensure no decimal places for NGN here
  return `₦${amountNgn.toLocaleString("en-NG")}`;
}
