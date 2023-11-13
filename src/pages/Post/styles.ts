import styled from 'styled-components'
import Markdown from 'react-markdown'

export const PostPageContainer = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  margin-top: -5.5rem;
  position: relative;
  z-index: 999;
`

export const MarkdownContainer = styled(Markdown)`
  padding: 2.5rem 2rem;
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};

  pre {
    background-color: ${(props) => props.theme['base-post']};
    border-radius: 2px;
    padding: 1rem;
    margin: 1.5rem 0 1.5rem 0;
  }
`
