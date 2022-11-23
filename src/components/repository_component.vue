<template>
    <div class="repository-components cursor-pointer bg-neutral-800 rounded-md drop-shadow-md text-white m-2" @click="transitionGitHub(repository_data.node.url)">
        <div class="repository-container-top flex ml-2">
            <div class="repository-container-left w-3/4">
                <p class="text-xl">{{ repository_data.node.name }}</p>
                <p class="text-sm">{{changeDescription(repository_data.node.description)}}</p>
            </div>
            <div class="repository-container-right flex flex-col">
                <div class="flex">
                    <img src="star.png">
                    <span>{{ repository_data.node.stargazerCount}}</span>
                </div>
                <div class="flex">
                    <img src="fork.png">
                    <span>{{ repository_data.node.forkCount}}</span>
                </div>
                
            </div>
        </div>
        <div class="repository-container-bottom flex ml-2">
            <div class="flex items-center">
                <p>{{ repository_data.node.owner.login}}</p>
                <img class="w-8 h-8 rounded-3xl" :src="repository_data.node.owner.avatarUrl">
            </div>
            <div class="flex">
                <p>{{ checkLang(repository_data.node.languages.nodes[0])}}</p>
            </div>
            <div class="flex">
                <img src="calender.png">
                <p>{{repository_data.node.updatedAt.slice(0, 10)}}</p>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
const repo = defineProps(['repository_data'])

const transitionGitHub = (url: string) => {
    window.location.href = url
}

const changeDescription = (description: string) => {
    try {
        if (description)
            return description.slice(0, 50) + '...'
        return ''
    } catch {
        return ''
    }
}
const checkLang = (lang: Object) => {
    try {
        if (lang.name)
            return lang.name
        return 'No Lang'
    } catch {
        return 'No Lang'
    }
}
</script>