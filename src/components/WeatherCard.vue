<template>
    <!-- v-card: 天気情報を表示するカードコンポーネント。max-widthで最大幅を指定 -->
    <v-card class="max-auto my-4" max-width="400">
        <!-- v-card-title: カードのタイトル部分。都市名を表示 -->
        <v-card-title class="text-h6">{{ weather.name }}</v-card-title>
        <v-card-text>
            <div class="d-flex align-center">
                <!-- 天気アイコン画像。OpenWeatherMapのアイコンURLを使用 -->
                <img :src="iconUrl" alt="天気アイコン" width="60" height="60" />
                <div class="ml-4">
                    <!-- 気温を表示 -->
                    <div>気温:{{ weather.main.temp }}℃</div>
                    <!-- 湿度を表示 -->
                    <div>湿度:{{ weather.main.humidity }}%</div>
                    <!-- 風速を表示 -->
                    <div>風速:{{ weather.wind.speed }} m/s</div>
                    <!-- 天気の説明を表示 -->
                    <div>天気:{{ weather.weather[0].description }}</div>
                </div>
            </div>
        </v-card-text>
    </v-card>
</template>
<script setup lang="ts">
import type { WeatherData } from '@/types/weather';
import { computed } from 'vue';

// propsとしてWeatherData型のweatherを受け取る
const props = defineProps<{
    weather: WeatherData
}>()

// 天気アイコンのURLを計算プロパティで生成
const iconUrl = computed(() =>
    `https://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`
)
</script>
<style scoped></style>
