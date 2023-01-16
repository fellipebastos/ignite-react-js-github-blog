import styled from 'styled-components'

export const PostsContainer = styled.main`
  width: min(${({ theme }) => theme.container.md}, 100%);
  margin: 0 auto;
`

export const SearchContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-direction: column;
`

export const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: ${({ theme }) => theme.font.primary.size.lg};
    color: ${({ theme }) => theme.colors.base.subtitle};
  }
  span {
    font-size: ${({ theme }) => theme.font.primary.size.sm};
    color: ${({ theme }) => theme.colors.base.span};
  }
`
