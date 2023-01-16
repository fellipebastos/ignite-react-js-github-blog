import styled from 'styled-components'

import background from '../../assets/header_background.png'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0 8.375rem;

  background: url(${background}) no-repeat center;
  background-size: cover;
`
