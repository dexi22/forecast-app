import { useState } from "react";
import { useWeatherData } from "./hooks/useWeatherData";
import { useForecastState } from "./hooks/useForecastState";
import Header from "./components/sections/headerSection";
import LoadingSkeleton from "./components/common/loadingSkeleton";
import MainContent from "./components/sections/mainContent";
import { getForecastForTime } from "./utils/forecastUtils";
import ErrorMessage from "./components/common/errorMessage";
import "./index.css";

export default function App() {
  const [city, setCity] = useState("");

  const { weatherData, isLoading, errorMessage } = useWeatherData(city);
  const { selectedHour, selectedDay, setSelectedHour, setSelectedDay } = useForecastState();

  const forecastForSelectedTime = getForecastForTime(weatherData, selectedHour, selectedDay);

  const showMainContent = !isLoading && weatherData && forecastForSelectedTime;

  return (
    <div className="min-w-screen min-h-screen font-[poppins] text-text-primary bg-background-from bg-gradient-to-b from-background-from to-background-to selection:bg-selection selection:text-text-primary">
      <div className="px-8 py-8 mx-auto max-w-4xl flex flex-col gap-8">
        <Header
          setCity={setCity}
          isLoading={isLoading}
          forecastForSelectedTime={forecastForSelectedTime}
        />
        {errorMessage && <ErrorMessage message={errorMessage} />}
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          showMainContent && (
            <MainContent
              weatherData={weatherData}
              forecastForSelectedTime={forecastForSelectedTime}
              selectedDay={selectedDay}
              selectedHour={selectedHour}
              setSelectedHour={setSelectedHour}
              setSelectedDay={setSelectedDay}
            />
          )
        )}
      </div>
    </div>
  );
}
