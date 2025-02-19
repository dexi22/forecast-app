import { useEffect, useState } from "react";
import { WeatherApiResponse } from "../types/types";
import { getWeatherData } from "../api/api";

export function useWeatherData(city: string) {
  const [weatherData, setWeatherData] = useState<WeatherApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!city) return;

    const controller = new AbortController();
    const fetchWeather = async () => {
      setIsLoading(true);
      setErrorMessage("");

      try {
        const data = await getWeatherData(city, controller.signal);
        setWeatherData(data);
      } catch (error) {
        if ((error as Error).name !== "AboutError") {
          setErrorMessage("Oops! Something went wrong.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return { weatherData, isLoading, errorMessage };
}
