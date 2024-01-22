import { NavLink } from 'react-router-dom'
import { PostContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface PostType {
  title: string
  body: string
  number: number
  created_at: Date
}

interface PostProps {
  post: PostType
}

export function Post(props: PostProps) {
  const postBody = props.post.body.substring(0, 200).concat('...')

  let formatedDate = ''

  if (props.post.created_at) {
    formatedDate = formatDistanceToNow(new Date(props.post.created_at), {
      addSuffix: true,
      locale: ptBR,
    })
  }

  const postUrl = `/post/${props.post.number}`

  return (
    <NavLink to={postUrl}>
      <PostContainer>
        <div>
          <h1>{props.post.title}</h1>

          <span>{formatedDate}</span>
        </div>

        <p>{postBody}</p>
      </PostContainer>
    </NavLink>
  )
}
