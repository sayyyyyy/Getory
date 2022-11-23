<template>
    <div class="flex p-4 mb-8 items-center w-100">
        <img class="w-10 h-10" src="/favicon.png">
        <div class="flex ml-auto text-sm text-white items-center">
            <button class="bg-neutral-800 rounded-2xl drop-shadow-xl mr-2 p-2 h-4/5">{{ $t('random_btn')}}</button>
            <!-- TODO デザインモード切り替えを追加 -->
            <form>
                <select id="locale-select" class="h-4/5 bg-inherit text-base" v-model="$i18n.locale">
                    <option value="en">{{ $t('en') }}</option>
                    <option value="ja">{{ $t('ja') }}</option>
                </select>
            </form>
        </div>
    </div>

</template>

<script setup lang="ts">
</script>