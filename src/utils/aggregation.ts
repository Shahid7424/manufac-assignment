import type { FuelRecord } from "../types";

export const MONTH_LABELS = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec"
];

export function getUniqueCities(records: FuelRecord[]) {
  return Array.from(new Set(records.map(r => r.city)));
}

export function getUniqueFuelTypes(records: FuelRecord[]) {
  return Array.from(new Set(records.map(r => r.fuelType)));
}

export function getUniqueYears(records: FuelRecord[]) {
  return Array.from(
    new Set(records.map(r => new Date(r.date).getFullYear()))
  ).sort();
}

export function getMonthlyAverages(
  records: FuelRecord[],
  city: string,
  fuel: string,
  year: number
) {
  const filtered = records.filter((r) => {
    const d = new Date(r.date);
    return r.city === city && r.fuelType === fuel && d.getFullYear() === year;
  });

  const sums = Array(12).fill(0);
  const counts = Array(12).fill(0);

  filtered.forEach((r) => {
    const m = new Date(r.date).getMonth();
    sums[m] += r.rsp;
    counts[m] += 1;
  });

  return sums.map((sum, i) => (counts[i] ? sum / counts[i] : 0));
}
