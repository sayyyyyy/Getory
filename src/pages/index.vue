<template>
    <div>
        <div class="flex">
            <p class="text-white">言語から探す</p>
            <input type="text" autocomplete="off">
        </div>
        <div class="flex bg-scroll">
            <ProgrammingLangBtn ref="childRef" v-for="programming_language in programming_languages" :lang_data="programming_language"></ProgrammingLangBtn>
        </div>
        
        <div class="grid grid-cols-3">
            <Repository_component ref="childRef" v-for="repository_data in state.repo_data" :repository_data="repository_data"></Repository_component>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import Repository_component from '~~/components/repository_component.vue';

const programming_languages = [
    {lang: 'HTML', img: 'HTML.png', search_name: 'html'},
    {lang: 'TypeScript', img: 'TypeScript.png' , search_name: 'ts'},
    {lang: 'C++',img: 'C++.png', search_name: 'c%2B%2B'},
    {lang: 'CSS',img: 'CSS.png', search_name: 'css'},
    {lang: 'D',img: 'D.png', search_name: 'd'},
    {lang: 'Dart',img: 'Dart.png', search_name: 'dart'},
    {lang: 'Go',img: 'Go.png', search_name: 'go'},
    {lang: 'JavaScript',img: 'JavaScript.png', search_name: 'js'},
    {lang: 'Kotlin',img: 'Kotlin.png', search_name: 'kotlin'},
    {lang: 'PHP',img: 'PHP.png', search_name: 'php'},
    {lang: 'Python',img: 'Python.png', search_name: 'python'},
    {lang: 'Ruby',img: 'Ruby.png', search_name: 'ruby'},
    {lang: 'Rust',img: 'Rust.png', search_name: 'rust'},
    {lang: 'Vue',img: 'Vue.png', search_name: 'vue'},
    {lang: 'Swift',img: 'Swift.svg', search_name: 'swift'},
]
const childRef = ref()

const repositoryStore = useRepositoryStore()
const { state } = repositoryStore
const API_URL = 'https://api.github.com/'


const getRandomRepo = () => {
    useFetch(API_URL + 'repositories')
    .then( (response) => {
        repositoryStore.setRepository('random_search', response.data._rawValue)
    })
}

getRandomRepo()

</script>