<template>
    <div class="repository-components light:border light:border-neutral-200 flex flex-col cursor-pointer bg-white dark:bg-neutral-800 rounded-md drop-shadow-md text:black dark:text-white m-3 mb-6 p-2 md:m-4" @click="transitionGitHub(repository_data.node.url)">
        <div class="repository-container-top flex ml-2 mb-4">
            <div class="repository-container-left w-3/4">
                <p class="text-xl mb-1 lg:text-2xl md:mb-2 lg:mb-3">{{ repository_data.node.name }}</p>
                <p class="text-sm lg:text-base">{{changeDescription(repository_data.node.description)}}</p>
            </div>
            <div class="repository-container-right ml-auto flex flex-col mt-3 mr-2">
                <div class="flex items-center text-sm mb-3 lg:text-base">
                    <img src="/star.png" class="w-6 h-6 mr-2">
                    <p>{{ repository_data.node.stargazerCount }}</p>
                </div>
                <div class="flex items-center text-sm lg:text-base">
                    <img src="/fork.png" class="w-5 h-6 ml-1 mr-2">
                    <p>{{ repository_data.node.forkCount}}</p>
                </div>
                
            </div>
        </div>
        <div class="repository-container-bottom flex ml-2 w-full bottom-0 text-xs lg:text-sm mt-auto">
            <div class="flex items-center mr-3">
                <p class="mr-1">{{changeUsername(repository_data.node.owner.login)}}</p>
                <img class="w-8 h-8 rounded-3xl" :src="repository_data.node.owner.avatarUrl">
            </div>
            <div class="flex items-center mr-3 text-xs ml-auto lg:text-sm">
                <p>{{ checkLang(repository_data.node.languages.nodes[0])}}</p>
            </div>
            <div class="flex items-center mr-3 ml-auto lg:text-sm">
                <img src="/calender.png" class="w-4 h-4">
                <p class="text-xs ml-2">{{repository_data.node.updatedAt.slice(0, 10)}}</p>
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
        if (description) {
            if (description.length > 60)
                return description.slice(0, 60) + '...'
            else
                return description

        }
            
        return ''
    } catch {
        return ''
    }
}

const changeUsername = (name: string) => {
    try {
        if (name) {
            if (name.length > 20)
                return name.slice(0, 20) + '...'
            else
                return name
        }
            
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