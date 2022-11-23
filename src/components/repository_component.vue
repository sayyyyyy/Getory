<template>
    <div class="repository-components cursor-pointer bg-neutral-800 rounded-md drop-shadow-md text-white m-2" @click="transitionGitHub(repository_data.html_url)">
        <div class="repository-container-top flex ml-2">
            <div class="repository-container-left">
                <p class="text-lg">{{ repository_data.name}}</p>
            </div>
            <!-- <div class="repository-container-right">
                <span>Star</span><span>{{ repository_data.stargazers_count}}</span>
                <span>Folk</span><span>{{ repository_data.forks_count}}</span>
            </div> -->
        </div>
        <div class="repository-container-bottom flex ml-2">
            <div class="flex items-center">
                <p>{{ repository_data.owner.login}}</p>
                <img class="w-10 h-10 rounded-3xl" :src="repository_data.owner.avatar_url">
            </div>
            <!-- <div class="flex">
                <p>{{repository_data.language}}</p>
            </div> -->
            <!-- <p>Updated in {{repository_data.updated_at}}</p> -->
        </div>

    </div>
</template>

<script setup lang="ts">
const repo = defineProps(['repository_data'])

const transitionGitHub = (url: string) => {
    window.location.href = url
}

</script>