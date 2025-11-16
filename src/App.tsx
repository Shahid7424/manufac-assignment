import { Container, Stack } from "@mantine/core";
import rawData from "./data/rsp-data.json";
import { normalize } from "./utils/normalize";
import {
  getUniqueCities,
  getUniqueFuelTypes,
  getUniqueYears,
  getMonthlyAverages
} from "./utils/aggregation";
import { Filters } from "./components/Filters";
import { RspChart } from "./components/RspChart";
import { useMemo, useState } from "react";

const records = normalize(rawData);

export default function App() {
  const cities = getUniqueCities(records);
  const fuels = getUniqueFuelTypes(records);
  const years = getUniqueYears(records);

  const [city, setCity] = useState(cities[0]);
  const [fuel, setFuel] = useState(fuels[0]);
  const [year, setYear] = useState(years[0]);

  const monthlyAverages = useMemo(
    () => getMonthlyAverages(records, city, fuel, year),
    [city, fuel, year]
  );

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <Filters
          cities={cities}
          fuels={fuels}
          years={years}
          city={city}
          fuel={fuel}
          year={year}
          onCityChange={setCity}
          onFuelChange={setFuel}
          onYearChange={setYear}
        />

        <RspChart monthlyAverages={monthlyAverages} city={city} fuel={fuel} year={year} />
      </Stack>
    </Container>
  );
}
