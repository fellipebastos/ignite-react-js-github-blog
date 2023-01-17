import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com',
})

export const getUser = (username: string) => api.get(`/users/${username}`)

export const getIssue = (username: string, repo: string, number: number) =>
  api.get(`/repos/${username}/${repo}/issues/${number}`)

export const getIssues = (username: string, repo: string, search = '') =>
  api.get(`/search/issues?q=${search} repo:${username}/${repo}`)
