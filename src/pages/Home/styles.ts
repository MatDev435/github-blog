import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  margin-top: -5.5rem;
  position: relative;
  z-index: 2;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
    font-weight: bold;
    margin-top: 4.5rem;
  }
`

export const SearchForm = styled.form`
  width: 100%;
  margin-top: 0.75rem;

  input {
    color: ${(porps) => porps.theme['base-text']};
    font-size: 1rem;
    width: 100%;
    background: ${(props) => props.theme['base-input']};
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 0;
  }
`

export const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 2rem;
`
