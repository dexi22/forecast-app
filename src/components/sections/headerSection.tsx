import SearchBar from "./searchBar";
import Overview from "../forecast/overview";
import { CurrentForecast } from "../../types/types";

interface HeaderProps {
  forecastForSelectedTime: CurrentForecast | null;
  setCity: (value: string) => void;
  isLoading: boolean;
}

export default function Header({ forecastForSelectedTime, setCity, isLoading }: HeaderProps) {
  const renderOverview = () => {
    if (isLoading) return <div className="h-20">{/* Placeholder for loading */}</div>;
    if (!forecastForSelectedTime) return null;

    const { temperature_2m, apparent_temperature, weather_code } = forecastForSelectedTime;

    return (
      <Overview
        temperature={temperature_2m}
        apparentTemperature={apparent_temperature}
        weatherCode={weather_code}
      />
    );
  };

  return (
    <header className="flex flex-col gap-8">
      <SearchBar onChange={(value) => setCity(value)} />
      {renderOverview()}
    </header>
  );
}
