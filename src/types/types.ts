export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface CurrentForecast {
  temperature_2m: number;
  relative_humidity_2m: number;
  apparent_temperature: number;
  wind_speed_10m: number;
  wind_direction_10m: number;
  weather_code: number;
  precipitation: number;
}

export interface HourlyForecast {
  temperature_2m: number[];
  relative_humidity_2m: number[];
  apparent_temperature: number[];
  wind_speed_10m: number[];
  wind_direction_10m: number[];
  weather_code: number[];
  precipitation: number[];
}

export interface DailyForecast {
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  weather_code: number[];
  sunrise: string; // Time of sunrise (ISO 8601 format)
  sunset: string; // Time of sunset (ISO 8601 format)
}

export interface WeatherApiResponse {
  current: CurrentForecast;
  hourly: HourlyForecast;
  daily: DailyForecast;
}
