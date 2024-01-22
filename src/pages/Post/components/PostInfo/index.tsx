import { NavLink } from 'react-router-dom'
import { PostControls, PostInfoContainer, PostStatistics } from './styles'
import { ArrowLeft, Calendar, GithubLogo, ChatTeardrop } from 'phosphor-react'
import { Link } from '../../../../components/Link'
import ptBR from 'date-fns/locale/pt-BR'
import { formatDistanceToNow } from 'date-fns'

interface PostInfoProps {
  title: string
  owner: string
  createdAt: Date
  commentsNumber: number
  issueUrl: string
}

export function PostInfo(props: PostInfoProps) {
  let formatedDate = ''

  if (props.createdAt) {
    formatedDate = formatDistanceToNow(new Date(props.createdAt), {
      addSuffix: true,
      locale: ptBR,
    })
  }

  return (
    <PostInfoContainer>
      <PostControls>
        <NavLink to="/">
          <ArrowLeft size={12} />
          Voltar
        </NavLink>

        <Link url={props.issueUrl} text="VER NO GITHUB" />
      </PostControls>

      <h1>{props.title}</h1>

      <PostStatistics>
        <div>
          <GithubLogo size={18} />
          <p>{props.owner}</p>
        </div>

        <div>
          <Calendar size={18} />
          <p>{formatedDate}</p>
        </div>

        <div>
          <ChatTeardrop size={18} />
          <p>{props.commentsNumber} comentários</p>
        </div>
      </PostStatistics>
    </PostInfoContainer>
  )
}
