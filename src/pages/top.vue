<template>
    <ProgrammingLangBtn ref="childRef" v-for="programming_language in programming_languages" :lang_data="programming_language"></ProgrammingLangBtn>
    <!-- <ul>
        <li v-for="programming_language in programming_languages">{{programming_language.lang}}</li>
    </ul> -->
    <button>{{ $t('random') }}</button>
    <Repository_component ref="childRef" v-for="repository_data in repositories_data" :repository_data="repository_data"></Repository_component>
</template>

<script setup lang="ts">
    import Repository_component from '~~/components/repository_component.vue';
import { getRepositoryByRandom } from '../scripts/apiController'

    const programming_languages = [
        {lang: 'HTML', img: '../assets/img/HTML.png'},
        {lang: 'TypeScript', img: '../assets/img/HTML.png'}
    ]
    const childRef = ref()

    const repositories_data = getRepositoryByRandom()

</script>