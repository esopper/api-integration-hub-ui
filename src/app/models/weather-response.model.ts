export interface WeatherResponse {
    current: Current;
    forecast: Day[];
}

interface Current {
    temp: number;
    feelsLike: number;
    description: string;
    icon: string;
}

interface Day {
    dt: number;
    eve: number;
    day: number;
    eveFeelsLike: number;
    dayFeelsLike: number;
    description: string;
    icon: string;
    summary: string;
}