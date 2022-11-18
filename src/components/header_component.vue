<template>
    <form>
        <label for="locale-select">{{ $t('language') }}: </label>
        <select id="locale-select" v-model="$i18n.locale">
            <option value="en">{{ $t('en') }}</option>
            <option value="ja">{{ $t('ja') }}</option>
        </select>
    </form>
</template>

<script setup lang="ts">
</script>