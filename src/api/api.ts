import { Coordinates } from "../types/types";

const CITY_API_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";

async function fetchJson(url: string, signal: AbortSignal) {
  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  return response.json();
}

async function getCityCoordinates(city: string, signal: AbortSignal): Promise<Coordinates | null> {
  if (!city.trim()) return null;

  const url = `${CITY_API_URL}?name=${encodeURIComponent(city)}&count=1&language=ru&format=json`;
  const data = await fetchJson(url, signal);

  return data?.results?.[0] || null;
}

async function getWeather({ latitude, longitude }: Coordinates, signal: AbortSignal) {
  const url = `${WEATHER_API_URL}?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,wind_direction_10m,weather_code,precipitation&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,wind_direction_10m,weather_code,precipitation&daily=temperature_2m_max,temperature_2m_min,weather_code,sunrise,sunset`;

  return fetchJson(url, signal);
}

export async function getWeatherData(city: string, signal: AbortSignal) {
  const coordinates = await getCityCoordinates(city, signal);
  return coordinates ? getWeather(coordinates, signal) : null;
}
