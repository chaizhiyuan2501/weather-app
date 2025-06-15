<template>
    <div>
        <h1>Home</h1>
        <v-text-field v-model="city" label="都市名" />
        <v-btn @click="fetchWeather">天気を取得</v-btn>

        <div v-if="weather">
            <h2>{{ weather.name }}の天気</h2>
            <p>気温 : {{ weather.main.temp }} ℃</p>
            <p>湿度 : {{ weather.main.humidity }} %</p>
            <p>天気 : {{ weather.weather[0].description }}</p>
            <img :src="weatherIconUrl" alt="天気アイコン" />
            <p>風速 : {{ weather.wind.speed }} m/s</p>
        </div>
        <div v-if="error">
            <p>エラー: {{ error.message }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useWeather } from '@/composables/useWeather';
import type { WeatherData } from '@/types/weather';

const city = ref('tokyo');
const weather = ref<WeatherData | null>(null)
const error = ref<Error | null>(null)

const fetchWeather = async () => {
    const result = await useWeather(city.value, "ja");
    weather.value = result.data;
    error.value = result.error;
};

const weatherIconUrl = computed(() =>
    weather.value
        ? `https://openweathermap.org/img/wn/${weather.value.weather[0].icon}@2x.png`
        : ''
)
</script>
<style scoped></style>
