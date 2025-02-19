import { getWeatherIcon } from "../../utils/forecastUtils";

interface OverviewProps {
  temperature: number;
  apparentTemperature: number;
  weatherCode: number;
}

export default function Overview({ temperature, apparentTemperature, weatherCode }: OverviewProps) {
  const iconSize = 52;

  return (
    <div className="flex gap-2 justify-center items-center mt-8">
      {getWeatherIcon(weatherCode, iconSize)}
      <div className="flex flex-col">
        <p className="text-4xl mb-1">{Math.round(temperature)}℃</p>
        <p className="text-gray-400 text-xl">Feels like {Math.round(apparentTemperature)}℃</p>
      </div>
    </div>
  );
}
