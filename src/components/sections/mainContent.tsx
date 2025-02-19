import HourlyForecast from "../forecast/hourlyForecast";
import InfoCards from "./infoCardsSection";
import WeekForecast from "../forecast/weekForecast";
import { CurrentForecast, WeatherApiResponse } from "../../types/types";

interface MainContentProps {
  weatherData: WeatherApiResponse;
  forecastForSelectedTime: CurrentForecast;
  selectedDay: number;
  selectedHour: number | null;
  setSelectedHour: (hour: number | null) => void;
  setSelectedDay: (day: number) => void;
}

export default function MainContent({
  weatherData,
  forecastForSelectedTime,
  selectedDay,
  selectedHour,
  setSelectedHour,
  setSelectedDay,
}: MainContentProps) {
  const { daily, hourly } = weatherData;
  const { sunrise, sunset, weather_code, temperature_2m_max, temperature_2m_min } = daily;
  const { temperature_2m, weather_code: hourly_weather_code } = hourly;

  const { precipitation, relative_humidity_2m, wind_speed_10m, wind_direction_10m } =
    forecastForSelectedTime;

  const sunriseTime = sunrise[selectedDay].slice(-5);
  const sunsetTime = sunset[selectedDay].slice(-5);

  const dayTemperatures = temperature_2m.slice(selectedDay * 24, (selectedDay + 1) * 24);
  const dayWeatherCodes = hourly_weather_code.slice(selectedDay * 24, (selectedDay + 1) * 24);

  return (
    <main className="flex flex-col gap-8">
      <InfoCards
        precipitation={precipitation}
        humidity={relative_humidity_2m}
        windSpeed={wind_speed_10m}
        windDirection={wind_direction_10m}
        sunrise={sunriseTime}
        sunset={sunsetTime}
      />
      <HourlyForecast
        temperatures={dayTemperatures}
        weatherCodes={dayWeatherCodes}
        selectedHour={selectedHour}
        setSelectedHour={setSelectedHour}
      />
      <WeekForecast
        activeIndex={selectedDay}
        setSelectedDay={setSelectedDay}
        dailyWeatherCodes={weather_code}
        dailyMaxTemperatures={temperature_2m_max}
        dailyMinTemperatures={temperature_2m_min}
      />
    </main>
  );
}
