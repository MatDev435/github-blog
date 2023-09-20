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
}

export function Home() {
  const [userInfo, setUserInfo] = useState({} as UserInfoType)

  useEffect(() => {
    async function fetchUserData() {
      const { data } = await api.get('/users/matdev435')

      setUserInfo(data)
    }

    fetchUserData()
  }, [])

  return (
    <HomeContainer>
      <Profile user={userInfo} />

      <h2>Publicações</h2>

      <SearchForm>
        <input type="text" placeholder="Buscar conteúdo" />
      </SearchForm>

      <PostsContainer>
        <Post />
        <Post />
      </PostsContainer>
    </HomeContainer>
  )
}
