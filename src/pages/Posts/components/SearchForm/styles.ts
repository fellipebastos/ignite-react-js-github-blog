import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  input {
    width: 100%;
    padding: 0.75rem 1rem;

    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.base.border};
    background: ${({ theme }) => theme.colors.base.input};

    font-size: ${({ theme }) => theme.font.primary.size.md};
    color: ${({ theme }) => theme.colors.base.text};

    &::placeholder {
      color: ${({ theme }) => theme.colors.base.label};
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
`
