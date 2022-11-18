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
        ja: 'japanese'
      },
      ja: {
        hello: 'こんにちは',
        language: '言語',
        en: '英語',
        ja: '日本語'
      }
    }
  })

  vueApp.use(i18n)
})
