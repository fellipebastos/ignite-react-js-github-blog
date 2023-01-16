import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  }

  body {
    background: ${({ theme }) => theme.colors.base.background};
    color: ${({ theme }) => theme.colors.base.text};
    -webkit-font-smoothing: antialiased;
    line-height: 160%;
  }

  body, input, button, textarea {
    font-family: ${({ theme }) => theme.font.primary.family};
    font-weight: ${({ theme }) => theme.font.primary.weight.regular};
    font-size: ${({ theme }) => theme.font.primary.size.md};
  }

  input, textarea {
    &:focus {
      box-shadow: none
    };
  }

  a {
    text-decoration: none;
  }
`
