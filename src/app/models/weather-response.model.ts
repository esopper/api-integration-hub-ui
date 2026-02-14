export interface WeatherResponse {
    current: Current;
    daily: Forecast[];
}

interface Current {
    temp: number;
    feels_like: number;
    weather: Weather[];
}

interface Weather {
    description: string;
    icon: string;
}

interface Forecast {
    dt: number;
    temp: Temperatures;
    feels_like: Temperatures;
    weather: Weather[];
    summary: string;
}

interface Temperatures {
    day: number;
    eve: number;
}