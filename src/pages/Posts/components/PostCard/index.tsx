import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { PostCardContainer, PostCardContent } from './styles'

type Post = {
  number: number
  title: string
  body: string
  created_at: string
}

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const { number, title, body, created_at } = post

  const formattedCreatedAt = formatDistanceToNow(new Date(created_at), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <PostCardContainer to={`/post/${number}`}>
      <PostCardContent>
        <header>
          <h3>{title}</h3>
          <time dateTime={created_at}>{formattedCreatedAt}</time>
        </header>

        <p>{body}</p>
      </PostCardContent>
    </PostCardContainer>
  )
}
