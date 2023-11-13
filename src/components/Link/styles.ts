import styled from 'styled-components'

export const LinkContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  font-size: 0.75rem;
  color: ${(props) => props.theme.blue};
  font-weight: 700;
  text-decoration: none;
  position: relative;

  &:hover::before {
    content: '';
    background: ${(props) => props.theme.blue};
    width: 100%;
    height: 1px;
    position: absolute;
    left: 0;
    bottom: 0;
  }
`
