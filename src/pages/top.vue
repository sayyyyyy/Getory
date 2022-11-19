<template>
    <ProgrammingLangBtn></ProgrammingLangBtn>
    <button>叩く</button>
</template>

<script setup lang="ts">
    import { getRepositoryByLang, getRepositoryByUpdate } from '../scripts/apiController'

    // const random_repos =  getRepositoryByUpdate()
    // console.log(random_repos.value)

    const lang_repo = getRepositoryByLang('js')
    console.log(lang_repo.value.items)
</script>