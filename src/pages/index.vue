<template>
    <div class="w-screen">
        <div class="flex bg-neutral-800 border border-green-500 border-l-0 rounded-r-xl text-lg w-80 min-w-fit mb-6 items-center justify-center h-10 md:mb-10 lg:h-16 lg:w-1/3 lg:text-xl">
            <p class="text-white">{{ $t('searched_by_lang') }}</p>
            <input v-model="programming_lang" type="text" autocomplete="off" class="bg-inherit text-white border-b-2 border-gray-500/100 ml-4 h-5 w-28 lg:w-36">
            <img src="/search_icon.png" class="w-5 h-5 ml-2 mr-2">
        </div>
        <div class="flex overflow-x-scroll relative mb-10 w-screen md:mb-16">
            <ProgrammingLangBtn ref="childRef" v-for="programming_language in display_programming_languages" :lang_data="programming_language"></ProgrammingLangBtn>
        </div>
        <div class="flex bg-neutral-800 border border-green-500 border-l-0 rounded-r-xl text-lg w-48 mb-6 items-center justify-center h-10 md:mb-10 lg:h-16 lg:w-64 lg:text-xl">
            <p class="text-white">{{ $t('latest_repo') }}</p>
        </div>
        <div class="md:grid md:grid-cols-2">
            <Repository_component ref="childRef" v-for="repository_data in state.repo_data" :repository_data="repository_data"></Repository_component>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import Repository_component from '~~/components/repository_component.vue'

const programming_languages = [
    {lang: 'HTML', img: 'HTML.png', search_name: 'html', refine_name: 'html'},
    {lang: 'TypeScript', img: 'TypeScript.png' , search_name: 'ts', refine_name: 'typescript'},
    {lang: 'C++',img: 'C++.png', search_name: 'c%2B%2B', refine_name: 'c++'},
    {lang: 'CSS',img: 'CSS.png', search_name: 'css', refine_name: 'css'},
    {lang: 'D',img: 'D.png', search_name: 'd', refine_name: 'd'},
    {lang: 'Dart',img: 'Dart.png', search_name: 'dart', refine_name: 'dart'},
    {lang: 'Go',img: 'Go.png', search_name: 'go', refine_name: 'go'},
    {lang: 'JavaScript',img: 'JavaScript.png', search_name: 'js', refine_name: 'javascript'},
    {lang: 'Kotlin',img: 'Kotlin.png', search_name: 'kotlin', refine_name: 'kotlin'},
    {lang: 'PHP',img: 'PHP.png', search_name: 'php', refine_name: 'php'},
    {lang: 'Python',img: 'Python.png', search_name: 'python', refine_name: 'python'},
    {lang: 'Ruby',img: 'Ruby.png', search_name: 'ruby', refine_name: 'ruby'},
    {lang: 'Rust',img: 'Rust.png', search_name: 'rust', refine_name: 'rust'},
    {lang: 'Vue',img: 'Vue.png', search_name: 'vue', refine_name: 'vue'},
    {lang: 'Swift',img: 'Swift.svg', search_name: 'swift', refine_name: 'swift'},
]
let display_programming_languages = ref(programming_languages)
const programming_lang = ref('')
const childRef = ref()

const repositoryStore = useRepositoryStore()
const { state } = repositoryStore

const API_URL = 'https://api.github.com/'
const config = useRuntimeConfig()

const github_token = config.public.GITHUB_TOKEN
// 言語検索の実装
watch(programming_lang, () => {
    display_programming_languages.value = []

    programming_languages.forEach(element => {
        try {
            if (element.refine_name.includes(programming_lang.value.toLowerCase())) {
                display_programming_languages.value.push(element)
            }
        // 認識できない文字を含んでいたら
        } catch(e) {

        }
    });
})

const getRandomRepo = async () => {
    const query = `
    query {
        search(query: "sort=update", type: REPOSITORY, first: 20) {
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
        repositoryStore.setRepository('random_search', '', res.data.value.data.search.edges)
    })
    .catch((e) => console.log(e))   

}

getRandomRepo()

</script>