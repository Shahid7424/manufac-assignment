import { Select, Group, Paper } from "@mantine/core";

interface FiltersProps {
  cities: string[];
  fuels: string[];
  years: number[];
  city: string | null;
  fuel: string | null;
  year: number;
  onCityChange: (city: string) => void;
  onFuelChange: (fuel: string) => void;
  onYearChange: (year: number) => void;
}

export function Filters({
  cities,
  fuels,
  years,
  city,
  fuel,
  year,
  onCityChange,
  onFuelChange,
  onYearChange
}: FiltersProps) {
  return (
    <Paper shadow="sm" p="md" radius="md" withBorder>
      <Group grow>
        <Select
          label="City"
          data={cities}
          value={city}
          onChange={(v) => v && onCityChange(v)}
        />

        <Select
          label="Fuel Type"
          data={fuels}
          value={fuel}
          onChange={(v) => v && onFuelChange(v)}
        />

        <Select
          label="Year"
          data={years.map(String)}
          value={String(year)}
          onChange={(v) => v && onYearChange(Number(v))}
        />
      </Group>
    </Paper>
  );
}
