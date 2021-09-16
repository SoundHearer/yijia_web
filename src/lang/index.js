import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from './en'
import zhLocale from './tw'
import cnLocale from './cn'
Vue.use(VueI18n)

const messages = {
  'zh-CN':cnLocale,
  'en-US':enLocale,
  'zh-TW':zhLocale,
  'en':enLocale,
}
let lang = localStorage.getItem('lang') || navigator.language || navigator.userLanguage || "zh_CN";
const i18n = new VueI18n({
  locale:lang,
  messages:messages
})

export default i18n

