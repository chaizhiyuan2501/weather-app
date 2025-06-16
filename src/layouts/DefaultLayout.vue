<template>
    <!-- v-app: Vuetifyアプリケーションのルートコンテナ。全体のレイアウトやテーマを適用する -->
    <v-app>
        <!-- v-app-bar: アプリのトップバー（ヘッダー）。app属性で固定表示 -->
        <v-app-bar app color="blue darken-3" dark>
            <!-- v-toolbar-title: ツールバーのタイトル部分 -->
            <v-toolbar-title>Weather App</v-toolbar-title>
            <!-- v-spacer: スペースを空けて、右側のボタンを右寄せにする -->
            <v-spacer />
            <!-- v-btn: ナビゲーション用のボタン。to属性でルーティング -->
            <v-btn to="/" text>Home</v-btn>
            <v-btn to="/about" text>About</v-btn>
            <v-btn icon @click="toggleTheme">
                <v-icon>{{ theme.global.current.value.dark ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}</v-icon>
            </v-btn>
        </v-app-bar>

        <!-- v-main: メインコンテンツエリア。ルーティングされたページがここに表示される -->
        <v-main>
            <v-container class="py-8">
                <router-view></router-view>
            </v-container>
        </v-main>

        <!-- v-footer: アプリのフッター。app属性で固定表示 -->
        <v-footer app>
            <span>&copy; 2025 My Application</span>
        </v-footer>
    </v-app>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify';
const theme = useTheme();

const toggleTheme = () => {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>