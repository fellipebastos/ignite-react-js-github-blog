import styled from 'styled-components'

export const PostsContainer = styled.main`
  width: min(${({ theme }) => theme.container.md}, 100%);
  margin: 0 auto;
  padding-bottom: 8rem;
`

export const SearchContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-direction: column;
  margin-bottom: 3rem;
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

export const PostListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`
