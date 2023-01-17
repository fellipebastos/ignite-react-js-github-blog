import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  ProfileAvatar,
  ProfileBio,
  ProfileContainer,
  ProfileDetail,
  ProfileInfo,
} from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileAvatar src="https://github.com/fellipebastos.png" alt="" />

      <ProfileInfo>
        <ProfileBio>
          <h2>Cameron Williamson</h2>

          <a
            href="https://github.com/fellipebastos"
            target="_blank"
            rel="noreferrer"
          >
            Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>

          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </ProfileBio>

        <ProfileDetail>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>cameronwll</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Rocketseat</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 seguidores</span>
          </div>
        </ProfileDetail>
      </ProfileInfo>
    </ProfileContainer>
  )
}
