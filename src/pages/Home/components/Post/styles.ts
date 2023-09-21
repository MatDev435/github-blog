import { styled } from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;

  padding: 2rem;
  border-radius: 10px;
  background: ${(props) => props.theme['base-post']};

  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;

    margin-bottom: 0.875rem;

    h1 {
      flex: 1;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-title']};
      font-weight: bold;
    }

    span {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 0.875rem;
    }
  }

  p {
    color: ${(props) => props.theme['base-text']};
    margin-top: 1.25rem;
  }
`
