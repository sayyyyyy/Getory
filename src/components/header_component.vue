<template>
    <div class="flex p-4 mb-8 items-center w-100 lg:p-10">
        <img @click="transitionTop" class="w-10 h-10 lg:w-16 lg:h-16 cursor-pointer" src="/favicon.png">
        <div class="flex ml-auto text-white items-center">
            <button @click="getRandomRepo" class="bg-neutral-800 rounded-2xl drop-shadow-xl mr-2 p-2 h-4/5 text-sm lg:text-base lg:mr-6">{{ $t('random_btn')}}</button>
            <!-- TODO デザインモード切り替えを追加 -->
            <button @click="setColorTheme($colorMode.preference == 'dark' ?'light' : 'dark')">モード</button>
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