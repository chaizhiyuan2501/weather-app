<template>
    <v-container class="py-6">

        <v-row justify="center">
            <v-col clos="12" md="6">
                <h1 class="text-h5 mb-4">天気検索</h1>

                <v-text-field v-model="city" :label="$t('cityPlaceholder')" />
                <v-btn @click="fetchWeather">{{ $t('search') }}</v-btn>

                <WeatherCard v-if="weather" :weather="weather" />
                <v-alert v-if="error" type="error" class="mt-4">
                    {{ $t('error') }}：{{ error.message }}
                </v-alert>
            </v-col>
        </v-row>
        <ForecastChart v-if="forecastData" :labels="forecastData.list.map(item => item.date.dt_txt.slice(5, 16))"
            :temperatures="forecastData.list.map(item => item.main.temp)" />
    </v-container>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useWeatherStore } from '@/store/weather';
import WeatherCard from '@/components/WeatherCard.vue';
import { fetchForecast, useWeather } from "@/composables/useWeather";
import ForecastChart from '@/components/ForecastChart.vue';

const store = useWeatherStore();
const { city, weather, error } = storeToRefs(store);
const forecastData = ref<any[]>(null);

const fetchWeather = async () => {
    const result = await useWeather(city.value, "ja");
    weather.value = result.data;
    error.value = result.error as Error;

    const forecast = await fetchForecast(city.value, "ja");
    forecastData.value = forecast.data;
};

</script>
<style scoped></style>
