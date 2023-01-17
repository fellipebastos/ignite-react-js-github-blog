import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostCardContainer = styled(Link)`
  display: flex;
`

export const PostCardContent = styled.article`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  background: ${({ theme }) => theme.colors.base.post};
  border-radius: 10px;

  border: 2px solid transparent;

  &:hover {
    border-color: ${({ theme }) => theme.colors.base.label};
    transition: border-color 0.15s;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.25rem;

    h3 {
      flex: 1;

      font-size: ${({ theme }) => theme.font.primary.size.xl};
      font-weight: ${({ theme }) => theme.font.primary.weight.bold};
      color: ${({ theme }) => theme.colors.base.title};
    }

    time {
      color: ${({ theme }) => theme.colors.base.span};
      font-size: ${({ theme }) => theme.font.primary.size.sm};
    }
  }

  p {
    font-size: ${({ theme }) => theme.font.primary.size.md};
    color: ${({ theme }) => theme.colors.base.text};

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;

    word-break: break-word;
  }
`
