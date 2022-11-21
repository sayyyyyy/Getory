<template>
    <div>
        <div class="grid grid-cols-3">
            <ProgrammingLangBtn ref="childRef" v-for="programming_language in programming_languages" :lang_data="programming_language"></ProgrammingLangBtn>
        </div>
        
        <button>{{ $t('random') }}</button>
        <div class="grid grid-cols-3">
            <Repository_component ref="childRef" v-for="repository_data in repositories_data" :repository_data="repository_data"></Repository_component>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import Repository_component from '~~/components/repository_component.vue';
import { getRepositoryByRandom } from '../scripts/apiController'

const programming_languages = [
    {lang: 'HTML', img: 'HTML.png'},
    {lang: 'TypeScript', img: 'TypeScript.png'},
    {lang: 'C++',img: 'C++.png'},
    {lang: 'CSS',img: 'CSS.png'},
    {lang: 'D',img: 'D.png'},
    {lang: 'Dart',img: 'Dart.png'},
    {lang: 'Go',img: 'Go.png'},
    {lang: 'JavaScript',img: 'JavaScript.png'},
    {lang: 'Kotlin',img: 'Kotlin.png'},
    {lang: 'PHP',img: 'PHP.png'},
    {lang: 'Python',img: 'Python.png'},
    {lang: 'Ruby',img: 'Ruby.png'},
    {lang: 'Rust',img: 'Rust.png'},
    {lang: 'Vue',img: 'Vue.png'},
    {lang: 'React',img: 'React.svg'},
    {lang: 'Swift',img: 'Swift.svg'},
]
const childRef = ref()

const repositoryStore = useRepositoryStore()
const { state } = repositoryStore

const repositories_data = ref(getRepositoryByRandom())


</script>