<template>
    <div class="flex p-4 mb-8 items-center w-100 lg:p-10">
        <img @click="transitionTop" class="w-10 h-10 lg:w-16 lg:h-16 cursor-pointer" src="/favicon.png">
        <div class="flex ml-auto items-center">
            <button @click="getRandomRepo" class="bg-neutral-800 rounded-2xl drop-shadow-xl mr-2 p-2 h-4/5 text-sm text-white lg:text-base lg:mr-6">{{ $t('random_btn')}}</button>
            <!-- TODO デザインモード切り替えを追加 -->
            <label class="inline-flex relative items-center cursor-pointer">
                <input @click="setColorTheme($colorMode.preference == 'dark' ?'light' : 'dark')" type="checkbox" value="" class="sr-only peer">
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
            <form>
                <select id="locale-select" class="cursor-pointer h-4/5 bg-inherit text-base text-black lg:text-lg lg:mr-4 dark:text-white" v-model="$i18n.locale">
                    <option value="en">{{ $t('en') }}</option>
                    <option value="ja">{{ $t('ja') }}</option>
                </select>
            </form>
        </div>
    </div>

</template>

<script setup lang="ts">
const repositoryStore = useRepositoryStore()
const { state } = repositoryStore
const config = useRuntimeConfig()

const max = 200000

// definePageMeta({
//   colorMode: 'light',
// })
const colorMode = useColorMode()

type Theme = 'light' | 'dark'

const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme
}

const transitionTop = () => {
    navigateTo({path: '/'})
}

const getRandomRepo = () => {
    const SOURCE = "abcdefghijklmnopqrstuvwxyz0123456789"
    const search_word = SOURCE[Math.floor(Math.random() * SOURCE.length)];
    const query = `
    query { 
        search(query: "${search_word} in:readme sort:updated", type: REPOSITORY, first: 30) {
            edges {
                node {
                    ... on Repository {
                        name
                        description
                        url
                        owner {
                            login
                            avatarUrl
                        }
                        stargazerCount
                        forkCount
                        updatedAt     
                        languages(first: 1) {
                            nodes {
                                name
                                color
                            }
                        }
                    }
                }
            }
        }
    }
    `

    useFetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${config.public.GITHUB_TOKEN}`,
        },
        body: {
            query: query
        }
    }).then( (res) => {
        console.log(search_word)
        console.log(res.data.value.data.search.edges.length)
        if (res.data.value.data.search.edges.length == 0)
            getRandomRepo()

        navigateTo({path: '/search'})
        repositoryStore.setRepository('random_search', '', res.data.value.data.search.edges)
    })
    .catch((e) => console.log(e))  
}
</script>