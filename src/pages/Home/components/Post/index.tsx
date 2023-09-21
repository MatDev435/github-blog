import { NavLink } from 'react-router-dom'
import { PostContainer } from './styles'
import { PostType } from '../..'

interface PostProps {
  post: PostType
}

export function Post(props: PostProps) {
  const postBody = props.post.body.substring(0, 400).concat('...')

  return (
    <NavLink to="/post/1">
      <PostContainer>
        <div>
          <h1>{props.post.title}</h1>

          <span>Há 3 dias</span>
        </div>

        <p>{postBody}</p>
      </PostContainer>
    </NavLink>
  )
}
