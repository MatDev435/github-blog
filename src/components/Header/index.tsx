import imageCover from '../../assets/cover-image.png'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={imageCover} alt="" />
    </HeaderContainer>
  )
}
