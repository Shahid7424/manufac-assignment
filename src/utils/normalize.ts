import type { FuelRecord } from "../types";

export function normalize(raw: any[]): FuelRecord[] {
  return raw.map((row) => ({
    date: String(row["Calendar Day"]).trim(),
    city: String(row["Metro Cities"]).trim(),
    fuelType: String(row["Products"]).trim(),
    rsp: Number(row["Retail Selling Price"]) || 0
  }));
}
