import { createApp } from 'vue'
// Vuetifyのスタイルシートをインポート
import "vuetify/styles"
// Vuetify本体のファクトリ関数をインポート
import "@mdi/font/css/materialdesignicons.css" // アイコンフォントのスタイルシートをインポート

import App from '@/App.vue'
import { router } from '@/router'
import { pinia } from "@/store"
import { i18n } from '@/i18n'
import { vuetify } from '@/plugins/vuetify'


const app = createApp(App)
// ルーターをVueアプリに登録
app.use(router)
// Pinia（状態管理）をVueアプリに登録
app.use(pinia)
// VuetifyをVueアプリに登録（ここでUIコンポーネントが利用可能になる）
app.use(vuetify)
// i18n（国際化）をVueアプリに登録
app.use(i18n)
// アプリをマウント（#app要素に描画）
app.mount('#app')
