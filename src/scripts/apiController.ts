// import { Octokit } from '@octokit/rest'
// const octokit = new Octokit()

const API_URL = 'https://api.github.com/'


export const getRepository = (lang: string) => {
    const data = useFetch(API_URL + 'search/repositories?q=language:'+lang)
    console.log(data)
}


