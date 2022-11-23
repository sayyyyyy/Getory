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
        lang_search: 'Search results by {lang}',
        searched_by_lang: 'Search by Language',
        latest_repo: 'Latest Repositories'
      },
      ja: {
        hello: 'こんにちは',
        language: '言語',
        en: '英語',
        ja: '日本語',
        random_btn: 'ランダム検索',
        random_search: '',
        lang_search: '{lang}の検索結果',
        searched_by_lang: '言語から探す',
        latest_repo: '最新のリポジトリ'
      }
    }
  })

  vueApp.use(i18n)
})
