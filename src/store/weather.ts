import { defineStore } from "pinia";
import { ref } from "vue";

import { useWeather } from "@/composables/useWeather";
import type { WeatherData } from "@/types/weather";

// 天気情報を管理するPiniaストアを定義
export const useWeatherStore = defineStore("weather", () => {
    // city: 現在選択されている都市名（初期値は"Tokyo"）
    const city = ref("Tokyo");
    // weather: 取得した天気データ（WeatherData型、初期値はnull）
    const weather = ref<WeatherData | null>(null);
    // error: エラー情報（初期値はnull）
    const error = ref<Error | null>(null);

    // fetchWeather: 天気情報をAPIから取得する非同期関数
    const fetchWeather = async () => {
        // useWeatherコンポーザブルを使って天気データを取得（言語は日本語"ja"）
        const result = await useWeather(city.value, "ja");
        // 取得したデータをweatherに格納
        weather.value = result.data
        // エラーがあればerrorに格納
        error.value = result.error as Error;
    }

    // ストアで利用するstateや関数を返す
    return { city, weather, error, fetchWeather };
});
