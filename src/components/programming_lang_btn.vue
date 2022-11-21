<template>
    <div class="programming-lang-btn-components" v-on:click="clickedProgrammingLangBtn(lang_data.lang)">
        <img :src="generateImgPath(lang_data.img)">
        <p>{{lang_data.lang}}</p>
    </div>
</template>

<script setup lang="ts">
import { getRepositoryByLang } from '~~/scripts/apiController';
const props_data = defineProps(['lang_data'])
const repositoryStore = useRepositoryStore()
const { state } = repositoryStore

const clickedProgrammingLangBtn = (lang: string) => {
    const repo_lists = getRepositoryByLang(lang)
    console.log(repo_lists)
    repositoryStore.setRepository(repo_lists)
    navigateTo({path: '/search'})
}

const generateImgPath = (fileName: string): string => {
    const new_url = new URL(`../assets/img/${fileName}`, import.meta.url).href
    console.log(new_url)
    return new_url
}

</script>