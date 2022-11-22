import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'ja',
    messages: {
      en: {
        hello: 'Hello, {name}!',
        language: 'languages',
        en: 'english',
        ja: 'japanese',
        random_btn: 'Random Search',
        random_search: '',
        lang_search: 'Search results by {lang}'
      },
      ja: {
        hello: 'こんにちは',
        language: '言語',
        en: '英語',
        ja: '日本語',
        random_btn: 'ランダム検索',
        random_search: '',
        lang_search: '{lang}の検索結果です'
      }
    }
  })

  vueApp.use(i18n)
})
