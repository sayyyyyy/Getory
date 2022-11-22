<template>
    <div class="repository-components bg-neutral-800 rounded-2xl drop-shadow-md text-white m-1" @click="transitionGitHub(repository_data.html_url)">
        <div class="repository-container-top flex">
            <div class="repository-container-left">
                <p>{{ repository_data.name}}</p>
            </div>
            <!-- <div class="repository-container-right">
                <span>Star</span><span>{{ repository_data.stargazers_count}}</span>
                <span>Folk</span><span>{{ repository_data.forks_count}}</span>
            </div> -->
        </div>
        <div class="repository-container-bottom flex">
            <div class="flex">
                <p>{{ repository_data.owner.login}}</p>
                <img class="w-10 h=10" :src="repository_data.owner.avatar_url">
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

// const generateImgPath = (fileName: string): string => {
//     const new_url = new URL(`{fileName}`)
//     return new_url
// }
</script>