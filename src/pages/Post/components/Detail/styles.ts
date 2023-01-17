import styled from 'styled-components'

export const DetailContainer = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;
  margin-top: -5.625rem;
  margin-bottom: 2.25rem;

  background: ${({ theme }) => theme.colors.base.profile};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
`

export const DetailActions = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    justify-self: flex-end;
    align-self: flex-start;
    gap: 0.5rem;

    font-size: ${({ theme }) => theme.font.primary.size.xs};
    font-weight: ${({ theme }) => theme.font.primary.weight.bold};
    line-height: initial;
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;

    border-bottom: 1px solid transparent;
    padding-bottom: 2px;

    &:hover {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
`

export const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    font-size: ${({ theme }) => theme.font.primary.size.xxl};
    font-weight: ${({ theme }) => theme.font.primary.weight.bold};
    color: ${({ theme }) => theme.colors.base.title};
  }
`

export const DetailDetail = styled.div`
  display: flex;
  gap: 2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${({ theme }) => theme.colors.base.label};
    }

    span {
      color: ${({ theme }) => theme.colors.base.span};
    }
  }
`
