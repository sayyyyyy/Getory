<template>
    <div class="repository-components cursor-pointer bg-neutral-800 rounded-md drop-shadow-md text-white m-2" @click="transitionGitHub(repository_data.node.url)">
        <div class="repository-container-top flex ml-2">
            <div class="repository-container-left">
                <p class="text-lg">{{ repository_data.node.name}}</p>
            </div>
            <div class="repository-container-right">
                <span>Star</span><span>{{ repository_data.node.stargazerCount}}</span>
                <span>Folk</span><span>{{ repository_data.node.forkCount}}</span>
            </div>
        </div>
        <div class="repository-container-bottom flex ml-2">
            <div class="flex items-center">
                <p>{{ repository_data.node.owner.login}}</p>
                <img class="w-10 h-10 rounded-3xl" :src="repository_data.node.owner.avatarUrl">
            </div>
            <!-- <div class="flex">
                <p>{{repository_data.language}}</p>
            </div> -->
            <p>Updated in {{repository_data.node.updatedAt}}</p>
        </div>

    </div>
</template>

<script setup lang="ts">
const repo = defineProps(['repository_data'])

const transitionGitHub = (url: string) => {
    window.location.href = url
}

</script>