import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { LoadingContainer } from './styles'

export function Loading() {
  return (
    <LoadingContainer>
      <FontAwesomeIcon icon={faGithub} size="2x" beatFade />
    </LoadingContainer>
  )
}
