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
    </v-container>

</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useWeatherStore } from '@/store/weather';
import WeatherCard from '@/components/WeatherCard.vue';

const store = useWeatherStore();
const { city, weather, error } = storeToRefs(store);
const { fetchWeather } = store;

</script>
<style scoped></style>
