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

export function Detail() {
  return (
    <DetailContainer>
      <DetailActions>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </Link>

        <a
          href="https://github.com/fellipebastos"
          target="_blank"
          rel="noreferrer"
        >
          Ver no Github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </DetailActions>
      <DetailInfo>
        <h2>JavaScript data types and data structures</h2>

        <DetailDetail>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>cameronwll</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendar} />
            <span>Há 1 dia</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>5 comentários</span>
          </div>
        </DetailDetail>
      </DetailInfo>
    </DetailContainer>
  )
}
