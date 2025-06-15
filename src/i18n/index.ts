import { createI18n } from "vue-i18n";
import en from './en'
import ja from './ja'
import zh from './zh'
import zhTW from './zh-TW'

export const i18n = createI18n({
    legacy: false,
    locale: "ja",
    fallbackLocale: "en",
    messages: {
        en,
        zh,
        "zh-TW": zhTW,
        ja,
    },
});