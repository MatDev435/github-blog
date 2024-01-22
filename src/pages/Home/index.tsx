import { useEffect, useState, useContext } from 'react'
import { Profile } from './components/Profile'
import { HomeContainer, PostsContainer } from './styles'
import { Post } from './components/Post'
import { api } from '../../lib/api'
import { SearchFor } from './components/SearchFor'
import { PostsContext } from '../../contexts/PostsContext'

export interface UserInfoType {
  login: string
  avatar_url: string
  bio: string
  name: string
  company: string | null
  followers: number
  html_url: string
}

export function Home() {
  const { posts } = useContext(PostsContext)

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

      <SearchFor postsNumber={posts.length} />

      <PostsContainer>
        {posts.map((post) => {
          return <Post key={post.number} post={post} />
        })}
      </PostsContainer>
    </HomeContainer>
  )
}
