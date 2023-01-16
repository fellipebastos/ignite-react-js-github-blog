import styled from 'styled-components'

export const ProfileContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem 2rem 2rem 2.5rem;
  margin-top: -5.625rem;
  margin-bottom: 4.5rem;

  background: ${({ theme }) => theme.colors.base.profile};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
`

export const ProfileAvatar = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const ProfileBio = styled.div`
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(5, 1fr);

  h2 {
    grid-column: 1/5;

    font-size: ${({ theme }) => theme.font.primary.size.xxl};
    font-weight: ${({ theme }) => theme.font.primary.weight.bold};
    color: ${({ theme }) => theme.colors.base.title};
  }

  p {
    grid-column: 1/-1;
  }

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

    &:hover {
      text-decoration: underline;
    }
  }
`

export const ProfileDetail = styled.div`
  display: flex;
  gap: 1.5rem;

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
      color: ${({ theme }) => theme.colors.base.subtitle};
    }
  }
`
