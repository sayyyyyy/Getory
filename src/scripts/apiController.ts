// import { Octokit } from '@octokit/rest'
// const octokit = new Octokit()

const API_URL = 'https://api.github.com/'

// 必要な情報を絞り込む
type RepoData = {
    repo_id: number,
    repo_name: string,
    user_name: string,
    user_icon: string,
    user_url: string,
    repo_url: string,
    repo_description: string,
    updated_at: string,
    repo_folk: number,
    repo_star: number
}

// 戻り値の型指定をする
export const getRepositoryByLang = (lang: string) => {
    const { data: response} = useFetch(API_URL + 'search/repositories?q=language:'+lang)
    return response['_rawValue']
}

export const getRepositoryByRandom = () => {
    const { data: response} = useFetch(API_URL + 'repositories')
    return response['_rawValue']
}
