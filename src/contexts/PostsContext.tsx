import { useEffect, useState, createContext, ReactNode } from 'react'
import { api } from '../lib/api'

interface Post {
  title: string
  body: string
  number: number
  created_at: Date
}

interface PostsContextType {
  posts: Post[]
  fetchPosts: (query?: string) => Promise<void>
}

interface PostsProviderProps {
  children: ReactNode
}

export const PostsContext = createContext({} as PostsContextType)

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])

  async function fetchPosts(query?: string) {
    const response = await api.get(
      `search/issues?q=${query || ''} repo:MatDev435/github-blog`,
    )

    setPosts(response.data.items)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <PostsContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  )
}
