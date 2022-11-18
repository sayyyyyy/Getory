<template>
    <ProgrammingLangBtn></ProgrammingLangBtn>
    <button v-on:click="getRepository('js')">叩く</button>
</template>

<script setup lang="ts">
    import { getRepository } from '../scripts/apiController'
</script>