// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
    colorMode: {
        classSuffix: ''
    },
    app: {
        head: {
            title: 'Getroy',
            link: [
                { rel: "icon", type: "image/png", href: "/favicon.png" },
              ],
        }
    },
    runtimeConfig: {
        public: {
            GITHUB_TOKEN: process.env.GITHUB_TOKEN
        }
    },
    
})
