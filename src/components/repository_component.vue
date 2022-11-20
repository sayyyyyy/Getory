<template>
    <div class="repository-components" @click="transitionGitHub(repository_data.html_url)">
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
console.log(repo)

const transitionGitHub = (url: string) => {
    window.location.href = url
}
</script>