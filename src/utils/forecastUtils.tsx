import {
  Sun,
  CloudSun,
  Cloud,
  CloudFog,
  CloudDrizzle,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudHail,
  CloudRainWind,
} from "lucide-react";
import { CurrentForecast, WeatherApiResponse } from "../types/types";
import { mapValuesAtIndex } from "./utils";
import React from "react";

const weatherIcons = new Map<number, JSX.Element>([
  [0, <Sun />], // Clear sky
  [1, <CloudSun />],
  [2, <CloudSun />], // Mainly clear, partly cloudy
  [3, <Cloud />], // Overcast
  [45, <CloudFog />],
  [48, <CloudFog />], // Fog, rime fog
  [51, <CloudDrizzle />],
  [53, <CloudDrizzle />],
  [55, <CloudDrizzle />], // Drizzle
  [56, <CloudHail />],
  [57, <CloudHail />], // Freezing drizzle
  [61, <CloudRain />],
  [63, <CloudRain />],
  [65, <CloudRain />], // Rain
  [66, <CloudHail />],
  [67, <CloudHail />], // Freezing rain
  [71, <CloudSnow />],
  [73, <CloudSnow />],
  [75, <CloudSnow />],
  [77, <CloudSnow />], // Snowfall, snow grains
  [80, <CloudRain />],
  [81, <CloudRain />],
  [82, <CloudRain />], // Rain showers
  [85, <CloudSnow />],
  [86, <CloudSnow />], // Snow showers
  [95, <CloudLightning />], // Thunderstorm
  [96, <CloudRainWind />],
  [99, <CloudRainWind />], // Thunderstorm with hail
]);

const directions = [
  "North",
  "North-east",
  "East",
  "East-south",
  "South",
  "South-west",
  "West",
  "North-west",
  "North",
];

export function getForecastForTime(
  weatherData: WeatherApiResponse | null,
  hour: number | null,
  day: number
): CurrentForecast | null {
  if (!weatherData) return null;

  if (hour === null) {
    return day === 0
      ? weatherData.current
      : (mapValuesAtIndex(weatherData.hourly, 12 + day * 24) as CurrentForecast);
  }

  return mapValuesAtIndex(weatherData.hourly, hour + day * 24) as CurrentForecast;
}

export function getWeatherIcon(code: number, size?: number) {
  return React.cloneElement(weatherIcons.get(code) || <Sun />, { size });
}

export function getWindDirectionName(degrees: number) {
  if (degrees < 0 || degrees > 360) {
    throw new Error('Invalid direction');
  }

  return directions[Math.round(degrees / 45) % 8];
}
