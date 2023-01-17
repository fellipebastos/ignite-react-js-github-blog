import { useEffect, useState } from 'react'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { getUser } from '../../../../api/github'

import {
  ProfileAvatar,
  ProfileBio,
  ProfileContainer,
  ProfileDetail,
  ProfileInfo,
} from './styles'
import { Loading } from '../../../../components/Loading'

interface User {
  name: string
  login: string
  bio: string | null
  html_url: string
  avatar_url: string
  company: string | null
  followers: number
}

export function Profile() {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  async function fetchUser(username: string) {
    setIsLoading(true)

    const { data } = await getUser(username)

    const { name, login, bio, html_url, avatar_url, company, followers } = data

    setUser({
      name,
      login,
      bio,
      html_url,
      avatar_url,
      company,
      followers,
    })
    setIsLoading(false)
  }

  useEffect(() => {
    fetchUser('fellipebastos')
  }, [])

  return (
    <ProfileContainer>
      {!isLoading && user ? (
        <>
          <ProfileAvatar src={user.avatar_url} alt="" />

          <ProfileInfo>
            <ProfileBio>
              <h2>{user.name}</h2>

              <a href={user.html_url} target="_blank" rel="noreferrer">
                Github
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>

              <p>{user.bio || 'Não há descrição para este usuário'}</p>
            </ProfileBio>

            <ProfileDetail>
              <div>
                <FontAwesomeIcon icon={faGithub} />
                <span>{user.login}</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faBuilding} />
                <span>{user.company || '-'}</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faUserGroup} />
                <span>{user.followers} seguidores</span>
              </div>
            </ProfileDetail>
          </ProfileInfo>
        </>
      ) : (
        <Loading />
      )}
    </ProfileContainer>
  )
}
