import { Droplets, Sun, CloudRain, Wind } from "lucide-react";
import InfoCard from "../common/infoCard";
import { getWindDirectionName } from "../../utils/forecastUtils";

interface InfoCardsProps {
  precipitation: number;
  humidity: number;
  windSpeed: number;
  windDirection: number;
  sunrise: string;
  sunset: string;
}

export default function InfoCards({
  precipitation,
  humidity,
  windSpeed,
  windDirection,
  sunrise,
  sunset,
}: InfoCardsProps) {
  const windDirectionName = getWindDirectionName(windDirection);

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <InfoCard icon={<CloudRain />} label="Precipitation" value={`${precipitation} mm`} />
      <InfoCard icon={<Droplets />} label="Humidity" value={`${humidity}%`} />
      <InfoCard
        icon={<Wind />}
        label="Wind Speed"
        value={`${windSpeed} km/h`}
        extra={windDirectionName}
      />
      <InfoCard
        icon={<Sun />}
        label="Sunrise / sunset"
        value={`${sunrise} - ${sunset}`}
        extra="UTC"
      />
    </div>
  );
}
