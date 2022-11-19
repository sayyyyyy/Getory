<template>
    <ProgrammingLangBtn ref="childRef" v-for="programming_language in programming_languages" :lang_data="programming_language"></ProgrammingLangBtn>
    <!-- <ul>
        <li v-for="programming_language in programming_languages">{{programming_language.lang}}</li>
    </ul> -->
</template>

<script setup lang="ts">
    import { getRepositoryByLang, getRepositoryByUpdate } from '../scripts/apiController'


    // const random_repos =  getRepositoryByUpdate()
    // console.log(random_repos.value)
    const programming_languages = [
        {lang: 'HTML', img: '../assets/img/HTML.png'},
        {lang: 'TypeScript', img: '../assets/img/HTML.png'}
    ]
    const childRef = ref()
    // const lang_repo = getRepositoryByLang('js')
    // console.log(lang_repo.value.items)
</script>