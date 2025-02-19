import ForecastItem from "./forecastItem";
import Card from "../common/card";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface WeekForecastProps {
  activeIndex?: number | null;
  setSelectedDay: (day: number) => void;
  dailyWeatherCodes: number[];
  dailyMaxTemperatures: number[];
  dailyMinTemperatures: number[];
}

export default function WeekForecast({
  activeIndex,
  setSelectedDay,
  dailyWeatherCodes,
  dailyMaxTemperatures,
  dailyMinTemperatures,
}: WeekForecastProps) {
  const todayIndex = new Date().getDay();

  const weekDays = dailyMaxTemperatures.map((_, index) =>
    index === 0 ? "Today" : WEEKDAYS[(todayIndex + index) % 7]
  );

  return (
    <Card>
      <ul className="flex flex-wrap justify-around gap-2">
        {dailyMaxTemperatures.map((maxTemp, index) => {
          return (
            <ForecastItem
              key={index}
              active={activeIndex === index}
              when={weekDays[index]}
              temperature={`
								${Math.round(maxTemp)}° / ${Math.round(dailyMinTemperatures[index])}°`}
              weatherCode={dailyWeatherCodes[index]}
              onClick={() => setSelectedDay(index)}
            />
          );
        })}
      </ul>
    </Card>
  );
}
