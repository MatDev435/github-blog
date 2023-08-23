import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme['base-background']};
    }
    
    body, input, textarea, button {
        font-family: 'Nunito', sans-serif;
        line-height: 1.6;
        font-size: 1rem;
        color: ${(props) => props.theme['base-text']};
        font-weight: 400;
    }
`
