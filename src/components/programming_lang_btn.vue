<template>
    <div class="programming-lang-btns">
        <img :src="lang_data.img">
        <p>{{lang_data.lang}}</p>
    </div>
</template>

<script setup lang="ts">
const props_data = defineProps(['lang_data'])



// console.log(lang_data)


</script>