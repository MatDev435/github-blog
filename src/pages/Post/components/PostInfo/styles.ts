import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  padding: 2rem 2.5rem;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
  }
`

export const PostControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  :first-child {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 0.5rem;

    text-decoration: none;
    font-size: 0.75rem;
    font-weight: bold;
    color: ${(props) => props.theme.blue};
  }
`

export const PostStatistics = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 2rem;

  div {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 0.5rem;

    color: ${(props) => props.theme['base-span']};

    h1 {
      font-size: 1rem;
    }
  }
`
