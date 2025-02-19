import { useState } from 'react';

export function useForecastState() {
	const [selectedHour, setSelectedHour] = useState<number | null>(null);
	const [selectedDay, setSelectedDay] = useState(0);

	return { selectedHour, setSelectedHour, selectedDay, setSelectedDay };
}
