<template>
    <div class="programming-lang-btn-components" v-on:click="clickedProgrammingLangBtn(lang_data.lang)">
        <img :src="lang_data.img">
        <p>{{lang_data.lang}}</p>
    </div>
</template>

<script setup lang="ts">
import { getRepositoryByLang } from '~~/scripts/apiController';
const props_data = defineProps(['lang_data'])

const clickedProgrammingLangBtn = (lang: string) => {
    const repo_lists = getRepositoryByLang(lang)
    console.log(repo_lists)
    navigateTo({path: '/search'})
}


</script>