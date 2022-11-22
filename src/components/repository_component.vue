<template>
    <div class="repository-components bg-neutral-800 rounded-2xl drop-shadow-md w-20 h-20" @click="transitionGitHub(repository_data.html_url)">
        <div class="repository-container-left">
            <p>{{ repository_data.name}}</p>
            <p>{{ repository_data.owner.login}}</p>
        </div>
        <div class="repository-container-right">

        </div>
    </div>
</template>

<script setup lang="ts">
const repo = defineProps(['repository_data'])

const transitionGitHub = (url: string) => {
    window.location.href = url
}
</script>