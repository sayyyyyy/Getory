<template>
    <div class="programming-lang-btn-components light:border light:border-neutral-200 cursor-pointer m-2 bg-white dark:bg-neutral-800 rounded-2xl drop-shadow-lg flex flex-col justify-center items-center w-32 h-28 shrink-0 text-base md:w-40 md:h-36 lg:w-44 lg:h-40 lg:ml-6 lg:text-xl" v-on:click="clickedProgrammingLangBtn(lang_data.search_name, lang_data.lang)">
        <img class="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" :src="`/img/${lang_data.img}`">
        <p class="text-black dark:text-white text-center mt-3">{{lang_data.lang}}</p>
    </div>
</template>

<script setup lang="ts">
defineProps(['lang_data'])
const repositoryStore = useRepositoryStore()
const { state } = repositoryStore
const config = useRuntimeConfig()



const clickedProgrammingLangBtn = (lang: string, display_lang: string) => {
    const query = `
    query { 
        search(query: "language: ${lang} sort:updated", type: REPOSITORY, first: 30) {
            edges {
                node {
                    ... on Repository {
                        name
                        description
                        url
                        owner {
                            login
                            avatarUrl
                        }
                        stargazers {
                            totalCount
                        }
                        forkCount
                        pushedAt     
                        languages(first: 1) {
                            nodes {
                                name
                                color
                            }
                        }
                    }
                }
            }
        }
    }
    ` 

    useFetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${config.public.GITHUB_TOKEN}`,
        },
        body: {
            query: query
        }
    }).then( (res) => {
        navigateTo({path: '/search'})
        repositoryStore.setRepository('lang_search', display_lang, res.data.value.data.search.edges)
    })
    .catch((e) => console.log(e))   
}
</script>