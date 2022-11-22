<template>
    <div class="flex">
        <img class="w-7 h-7" src="/favicon.png">
        <button class="bg-neutral-800 text-white">{{ $t('random_btn')}}</button>
        <!-- TODO デザインモード切り替えを追加 -->
        <form>
            <select id="locale-select" v-model="$i18n.locale">
                <option value="en">{{ $t('en') }}</option>
                <option value="ja">{{ $t('ja') }}</option>
            </select>
        </form>
    </div>

</template>

<script setup lang="ts">
</script>