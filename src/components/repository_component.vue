<template>
    <div class="repository-components border-2 border-black w-40 h-40" @click="transitionGitHub(repository_data.html_url)">
        <div class="repository-container-left">
            <p>{{ repository_data.full_name}}</p>
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