import styled from 'styled-components'

export const PostContainer = styled.main`
  width: min(${({ theme }) => theme.container.md}, 100%);
  margin: 0 auto;
  padding-bottom: 8rem;
`

export const PostContent = styled.div`
  h1,
  h2 {
    padding-bottom: 0.375rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.base.border};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1.5rem 0 1rem;
    color: ${({ theme }) => theme.colors.base.title};
  }

  p,
  pre,
  ul {
    margin-bottom: 1rem;
  }

  ul {
    padding-left: 1.75rem;

    li + li {
      margin-top: 0.5rem;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    width: 100%;
  }

  pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: ${({ theme }) => theme.colors.base.post};
    border-radius: 6px;
  }
`
