<template>
    <div class="programming-lang-btn-components cursor-pointer m-2 bg-neutral-800 rounded-2xl drop-shadow-xl text-white flex flex-col justify-center items-center w-32 h-28 shrink-0 text-base md:w-40 md:h-36 lg:w-44 lg:h-40 lg:ml-6 lg:text-xl" v-on:click="clickedProgrammingLangBtn(lang_data.search_name)">
        <img class="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" :src="`/img/${lang_data.img}`">
        <p class="text-center mt-3">{{lang_data.lang}}</p>
    </div>
</template>

<script setup lang="ts">

defineProps(['lang_data'])
const repositoryStore = useRepositoryStore()
const { state } = repositoryStore
const API_URL = 'https://api.github.com/'

const clickedProgrammingLangBtn = (lang: string) => {
    useFetch(API_URL + 'search/repositories?q=language:'+lang)
    .then((response) => {

        repositoryStore.setRepository('lang_search', response.data._rawValue.items)
        navigateTo({path: '/search'})
    })

}

const generateImgPath = (fileName: string): string => {
    const new_url = new URL(`/img/${fileName}`, import.meta.url).href
    return new_url
}

</script>