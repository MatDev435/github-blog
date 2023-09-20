import { UserInfoType } from '../..'
import {
  Avatar,
  ProfileContainer,
  UserInfo,
  UserInfoContainer,
  UsernameContainer,
} from './styles'

import {
  Users,
  GithubLogo,
  Buildings,
  ArrowSquareUpRight,
} from 'phosphor-react'

interface UserInfoProps {
  user: UserInfoType
}

export function Profile(props: UserInfoProps) {
  const githubUrl = `https://github.com/${props.user.login}`

  return (
    <ProfileContainer>
      <Avatar src={props.user.avatar_url} alt="" />

      <UserInfo>
        <UsernameContainer>
          <h1>{props.user.name}</h1>

          <a href={githubUrl}>
            GITHUB
            <ArrowSquareUpRight size={12} />
          </a>
        </UsernameContainer>

        <p>{props.user.bio}</p>

        <UserInfoContainer>
          <div>
            <GithubLogo size={18} />
            <span>{props.user.login}</span>
          </div>

          <div>
            <Buildings size={18} />
            <span>{props.user.company ? props.user.company : 'Nenhuma'}</span>
          </div>

          <div>
            <Users size={18} />
            <span>{props.user.followers} Seguidores</span>
          </div>
        </UserInfoContainer>
      </UserInfo>
    </ProfileContainer>
  )
}
