<template>
    <div class="flex bg-white dark:bg-neutral-800 border border-green-500 border-l-0 rounded-r-xl text-lg w-64 min-w-fit mb-6 items-center justify-center h-10 md:mb-10 lg:h-16 lg:w-80 lg:text-xl">
        <p class="text-black dark:text-white ml-4">{{ $t(state.search_way, { lang: state.lang_name }) }}</p>
    </div>
    <div class="md:grid md:grid-cols-2">
        <Repository_component v-for="repository_data in state.repo_data" :repository_data="repository_data"></Repository_component>
    </div>
</template>

<script setup lang="ts">
const repositoryStore = useRepositoryStore()
const { state } = repositoryStore

// リロードされた時
if (!state.value.search_way)
    navigateTo({path: '/'})
</script>