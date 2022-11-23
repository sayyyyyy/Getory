// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            link: [
                { rel: "icon", type: "image/png", href: "/favicon.png" },
              ],
        }
    },
    runtimeConfig: {
        public: {
            GITHUB_TOKEN: ''
        }
    },
    
})
