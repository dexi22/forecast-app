import ForecastItem from "./forecastItem";
import Card from "../common/card";
import { useCallback, useState } from "react";
import { range } from "../../utils/utils";
import clsx from "clsx";

interface HourlyForecastProps {
  temperatures: number[];
  weatherCodes: number[];
  selectedHour?: number | null;
  setSelectedHour: (hour: number | null) => void;
}

export default function HourlyForecast({
  temperatures,
  weatherCodes,
  selectedHour,
  setSelectedHour,
}: HourlyForecastProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getTemperatures = useCallback(() => {
    return isExpanded ? temperatures : range(temperatures, 0, 24, 3);
  }, [isExpanded, temperatures]);

  return (
    <Card>
      <ul
        className={clsx(
          "gap-2 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 transition-all duration-300 ease-in-out",
          isExpanded ? "max-h-[1000px]" : "max-h-[200px]"
        )}
      >
        {getTemperatures().map((temperature, index) => {
          const hour = isExpanded ? index : index * 3;
          return (
            <ForecastItem
              key={index}
              active={selectedHour === hour}
              when={`${hour}:00`}
              temperature={`${Math.round(temperature)}°`}
              weatherCode={weatherCodes[index]}
              onClick={() => setSelectedHour(hour === selectedHour ? null : hour)}
            />
          );
        })}
      </ul>
      <div className="flex justify-end pr-4">
        <button
          className="transition-all hover:bg-selection p-2 rounded-full"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? "Show less hours" : "Show more hours"}
        >
          {isExpanded ? "Show less" : "Show more"}
        </button>
      </div>
    </Card>
  );
}
