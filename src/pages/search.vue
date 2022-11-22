<template>
    <p class="text-white">{{ $t(state.search_way, { lang: state.repo_data[0].language }) }}</p>
    <div class="flex flex-col">
        <Repository_component v-for="repository_data in state.repo_data" :repository_data="repository_data"></Repository_component>
    </div>
</template>

<script setup lang="ts">
const repositoryStore = useRepositoryStore()
const { state } = repositoryStore

//stateにrepositoryデータが入っている

</script>