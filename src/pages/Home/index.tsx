import { useEffect, useState } from 'react'
import { Profile } from './components/Profile'
import { HomeContainer, PostsContainer, SearchForm } from './styles'
import { Post } from './components/Post'
import { api } from '../../lib/api'

export interface UserInfoType {
  login: string
  avatar_url: string
  bio: string
  name: string
  company: string | null
  followers: number
  html_url: string
}

export interface PostType {
  title: string
  body: string
  number: number
  created_at: string
}

export function Home() {
  const [userInfo, setUserInfo] = useState({} as UserInfoType)
  const [posts, setPosts] = useState<PostType[]>([])

  useEffect(() => {
    async function fetchUserData() {
      const { data } = await api.get('/users/matdev435')

      setUserInfo(data)
    }

    async function fetchPosts() {
      const { data } = await api.get(
        '/search/issues?q=repo:github-blog user:MatDev435',
      )

      setPosts(data.items)
    }

    fetchUserData()
    fetchPosts()
  }, [])

  return (
    <HomeContainer>
      <Profile user={userInfo} />

      <h2>Publicações</h2>

      <SearchForm>
        <input type="text" placeholder="Buscar conteúdo" />
      </SearchForm>

      <PostsContainer>
        {posts.map((post) => {
          return <Post key={post.number} post={post} />
        })}
      </PostsContainer>
    </HomeContainer>
  )
}
