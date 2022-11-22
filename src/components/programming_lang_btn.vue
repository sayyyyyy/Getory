<template>
    <div class="programming-lang-btn-components m-1 bg-neutral-800 rounded-2xl drop-shadow-md text-white flex flex-col justify-center items-center w-20 h-20 shrink-0" v-on:click="clickedProgrammingLangBtn(lang_data.search_name)">
        <img class="w-8 h-8" :src="generateImgPath(lang_data.img)">
        <p class="text-center">{{lang_data.lang}}</p>
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
    const new_url = new URL(`../assets/img/${fileName}`, import.meta.url).href
    return new_url
}

</script>