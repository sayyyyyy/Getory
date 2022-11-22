<template>
    <div class="programming-lang-btn-components border-2 border-black w-40 h-40" v-on:click="clickedProgrammingLangBtn(lang_data.search_name)">
        <img class="w-10 h-10" :src="generateImgPath(lang_data.img)">
        <p>{{lang_data.lang}}</p>
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