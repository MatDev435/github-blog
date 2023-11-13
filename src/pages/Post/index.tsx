import { useState, useEffect } from 'react'
import { MarkdownContainer, PostPageContainer } from './styles'
import { PostInfo } from './components/PostInfo'
import { api } from '../../lib/api'
import Markdown from 'react-markdown'
import { useParams } from 'react-router-dom'

interface IssueInfoProps {
  body: string
  title: string
  comments: number
  created_at: string
  html_url: string
  user: {
    login: string
  }
}

export function Post() {
  const [issueInfo, setIssueInfo] = useState({} as IssueInfoProps)
  const { issueNumber } = useParams()

  useEffect(() => {
    async function fetchIssueInfo() {
      const { data } = await api.get(
        `/repos/MatDev435/github-blog/issues/${issueNumber}`,
      )

      setIssueInfo(data)
    }

    fetchIssueInfo()
  }, [])

  return (
    <PostPageContainer>
      <PostInfo
        title={issueInfo.title}
        owner={issueInfo.user?.login}
        createdAt={issueInfo.created_at}
        commentsNumber={issueInfo.comments}
        issueUrl={issueInfo.html_url}
      />

      <MarkdownContainer>{issueInfo.body}</MarkdownContainer>
    </PostPageContainer>
  )
}
