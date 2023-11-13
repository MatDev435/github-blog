import { styled } from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  gap: 2rem;

  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  padding: 2rem 2.5rem;
`

export const Avatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
`

export const UserInfo = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.5rem;

  p {
    color: ${(props) => props.theme['base-text']};
    margin-bottom: 0.5rem;
  }
`

export const UsernameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    font-weight: 700;
  }
`

export const UserInfoContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 1.5rem;

  div {
    display: flex;
    ]justify-content: left;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['base-label']};
    }

    span {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
