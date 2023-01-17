import { useForm } from 'react-hook-form'

import { SearchFormContainer } from './styles'

interface SearchFormProps {
  onSubmit: (data: string) => Promise<void>
}

type SearchFormData = {
  query: string
}

export function SearchForm({ onSubmit }: SearchFormProps) {
  const { register, handleSubmit } = useForm<SearchFormData>()

  async function handleSearch(data: SearchFormData) {
    await onSubmit(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearch)}>
      <input placeholder="Buscar conteúdo" {...register('query')} />
    </SearchFormContainer>
  )
}
