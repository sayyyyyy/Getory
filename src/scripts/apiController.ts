// import { Octokit } from '@octokit/rest'
// const octokit = new Octokit()

const API_URL = 'https://api.github.com/'

// 必要な情報を絞り込む
const RepoData = {

}

// 戻り値の型指定をする
export const getRepositoryByLang = (lang: string) => {
    const { data: response} = useFetch(API_URL + 'search/repositories?q=language:'+lang)
    console.log(typeof(response.value))
    return response.value
}

export const getRepositoryByRandom = () => {
    const { data: response} = useFetch(API_URL + 'repositories')
    console.log(typeof(response.value))
    console.log(response.value)
    return response.value
}
