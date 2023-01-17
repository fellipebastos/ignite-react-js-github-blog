import {
  faArrowUpRightFromSquare,
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  DetailActions,
  DetailContainer,
  DetailDetail,
  DetailInfo,
} from './styles'
import { Link } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

type User = {
  login: string
}

type Post = {
  title: string
  user: User
  comments: number
  html_url: string
  created_at: string
}

interface DetailProps {
  post: Post
}

export function Detail({ post }: DetailProps) {
  const { title, user, comments, html_url, created_at } = post

  const formattedDate = formatDistanceToNow(new Date(created_at), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <DetailContainer>
      <DetailActions>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </Link>

        <a href={html_url} target="_blank" rel="noreferrer">
          Ver no Github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </DetailActions>
      <DetailInfo>
        <h2>{title}</h2>

        <DetailDetail>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{user.login}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendar} />
            <span>{formattedDate}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>{comments} comentários</span>
          </div>
        </DetailDetail>
      </DetailInfo>
    </DetailContainer>
  )
}
