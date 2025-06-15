import { createApp } from 'vue'
// Vuetifyのスタイルシートをインポート
import "vuetify/styles"
// Vuetify本体のファクトリ関数をインポート
import { createVuetify } from 'vuetify'
// Vuetifyの全コンポーネントをインポート
import * as components from 'vuetify/components'
// Vuetifyの全ディレクティブをインポート
import * as directives from 'vuetify/directives'

import App from '@/App.vue'
import { router } from '@/router'
import { pinia } from "@/store"
import { i18n } from '@/i18n'

// Vuetifyのインスタンスを作成
// components: 使用するVuetifyコンポーネントを登録
// directives: 使用するVuetifyディレクティブを登録
const vuetify = createVuetify({
    components,
    directives,
})

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
