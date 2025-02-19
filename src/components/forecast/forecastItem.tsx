import clsx from "clsx";
import { getWeatherIcon } from "../../utils/forecastUtils";

interface ForecastItemProps {
  className?: string;
  when: string;
  temperature: string;
  weatherCode: number;
  active?: boolean;
  onClick?: () => void;
}

export default function ForecastItem({
  className,
  when,
  temperature,
  weatherCode,
  active = false,
  onClick,
}: ForecastItemProps) {
  return (
    <li className={clsx("min-w-fit max-w-64 w-full flex-1", className)}>
      <button
        className={clsx(
          "p-2 w-full flex flex-col items-center gap-2 hover:bg-accent rounded-2xl transition-colors cursor-pointer focus-visible:outline focus-visible:outline-outline",
          active && "bg-accent"
        )}
        onClick={onClick}
      >
        <span>{when}</span>
        {getWeatherIcon(weatherCode)}
        <span className="text-lg">{temperature}</span>
      </button>
    </li>
  );
}
