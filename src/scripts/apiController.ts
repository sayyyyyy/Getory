// import { Octokit } from '@octokit/rest'
// const octokit = new Octokit()

const API_URL = 'https://api.github.com/'


export const getRepositoryByLang = (lang: string) => {
    const { data: response} = useFetch(API_URL + 'search/repositories?q=language:'+lang)
    return response
}

export const getRepositoryByUpdate = () => {
    const { data: response} = useFetch(API_URL + 'search/repositories')
    return response
}
