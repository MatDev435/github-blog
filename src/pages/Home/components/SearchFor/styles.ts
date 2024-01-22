import styled from 'styled-components'

export const SearchContainer = styled.div`
  margin-top: 4.5rem;
`

export const SearchFormTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
    font-weight: bold;
  }

  p {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
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
