import axios from "axios";

import type { WeatherData } from '@/types/weather'

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const cache = new Map<string, { data: WeatherData; timestamp: number }>();

export async function useWeather(city: string, lang: string = "ja") {
    const key = `${city}-${lang}`;
    const now = Date.now();

    if (cache.has(key) && now - cache.get(key)!.timestamp < 60000) {
        return {
            data: cache.get(key)!.data,
            error: null,
        };
    }

    try {
        const response = await axios.get(baseUrl, {
            params: {
                q: city,
                appid: apiKey,
                units: "metric",
                lang: lang,
            },
        });
        const data = response.data;
        cache.set(key, { data, timestamp: now });
        return {
            data,
            error: null,
        }
    } catch (e) {
        return {
            data: null,
            error: e as Error
        }
    }
}
// 何日以内の天気情報を取得する
export async function fetchWeather(city: string, lang: string = "ja") {
    const url = "https://api.openweathermap.org/data/2.5/weather";

    try {
        const response = await axios.get(url, {
            params: {
                q: city,
                appid: apiKey,
                units: "metric",
                lang,
            }
        })
        return { data: response.data, error: null };
    } catch (error) {
        return { data: null, error: error as Error };
    }

}