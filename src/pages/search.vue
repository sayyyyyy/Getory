<template>
    <div class="flex bg-neutral-800 border border-green-500 border-l-0 rounded-r-xl text-lg w-64 min-w-fit mb-6 items-center h-10">
        <p class="text-white ml-4">{{ $t(state.search_way, { lang: state.repo_data[0].language }) }}</p>
    </div>
    <div class="flex flex-col">
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