import { ArrowSquareUpRight } from 'phosphor-react'
import { LinkContainer } from './styles'

interface LinkProps {
  url: string
  text: string
}

export function Link({ url, text }: LinkProps) {
  return (
    <LinkContainer href={url}>
      {text}
      <ArrowSquareUpRight size={12} />
    </LinkContainer>
  )
}
