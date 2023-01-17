import { useEffect, useState } from 'react'
import { Loading } from '../../components/Loading'

import { getIssues } from '../../api/github'

import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'

import {
  PostListContainer,
  PostsContainer,
  SearchContainer,
  SearchHeader,
} from './styles'

interface Post {
  number: number
  title: string
  body: string
  created_at: string
}

export function Posts() {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [total, setTotal] = useState(0)

  async function fetchPosts(query = '') {
    setIsLoading(true)

    const { data } = await getIssues(
      'fellipebastos',
      'ignite-react-js-github-blog',
      query,
    )

    const { items, total_count } = data

    setPosts(() =>
      items.map(({ number, title, body, created_at }: Post) => ({
        number,
        title,
        body,
        created_at,
      })),
    )
    setTotal(total_count)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <PostsContainer>
      <Profile />

      <SearchContainer>
        <SearchHeader>
          <h2>Publicações</h2>
          <span>{total} publicações</span>
        </SearchHeader>

        <SearchForm onSubmit={fetchPosts} />
      </SearchContainer>

      {isLoading ? (
        <Loading />
      ) : (
        <PostListContainer>
          {posts.map((post) => (
            <PostCard key={post.number} post={post} />
          ))}
        </PostListContainer>
      )}
    </PostsContainer>
  )
}
