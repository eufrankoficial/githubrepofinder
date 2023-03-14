export interface GithubRepoModel {
    id: number,
    name: string,
    full_name: string,
    url: string,
    owner: Owner
}

export interface Owner {
    id?: number,
    login?: string,
    url?: string,
    avatar_url?: string
}

