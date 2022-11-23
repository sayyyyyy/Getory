<template>
    <div class="flex p-4 mb-8 items-center w-100 lg:p-10">
        <img @click="transitionTop" class="w-10 h-10 lg:w-16 lg:h-16 cursor-pointer" src="/favicon.png">
        <div class="flex ml-auto text-white items-center">
            <button class="bg-neutral-800 rounded-2xl drop-shadow-xl mr-2 p-2 h-4/5 text-sm lg:text-base lg:mr-6">{{ $t('random_btn')}}</button>
            <!-- TODO デザインモード切り替えを追加 -->
            <form>
                <select id="locale-select" class="cursor-pointer h-4/5 bg-inherit text-base lg:text-lg lg:mr-4" v-model="$i18n.locale">
                    <option value="en">{{ $t('en') }}</option>
                    <option value="ja">{{ $t('ja') }}</option>
                </select>
            </form>
        </div>
    </div>

</template>

<script setup lang="ts">
const transitionTop = () => {
    navigateTo({path: '/'})
}

</script>