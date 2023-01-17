import { Detail } from './components/Detail'
import ReactMarkdown from 'react-markdown'

import { PostContainer, PostContent } from './styles'
import { useParams } from 'react-router-dom'
import { getIssue } from '../../api/github'
import { useEffect, useState } from 'react'
import { Loading } from '../../components/Loading'

type User = {
  login: string
}
interface PostProps {
  title: string
  user: User
  comments: number
  html_url: string
  body: string
  created_at: string
}

type PostParams = {
  number: string
}

export function Post() {
  const { number } = useParams<PostParams>()

  const [post, setPost] = useState<PostProps | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  async function fetchPost(id: number) {
    setIsLoading(true)

    const { data } = await getIssue(
      'fellipebastos',
      'ignite-react-js-github-blog',
      id,
    )

    const { title, user, comments, html_url, body, created_at } = data

    setPost({ title, user, comments, html_url, body, created_at })
    setIsLoading(false)
  }

  useEffect(() => {
    fetchPost(Number(number))
  }, [number])

  return (
    <PostContainer>
      {isLoading ? (
        <Loading />
      ) : (
        post && (
          <>
            <Detail post={post} />

            <PostContent>
              <ReactMarkdown>{post.body}</ReactMarkdown>
            </PostContent>
          </>
        )
      )}
    </PostContainer>
  )
}
