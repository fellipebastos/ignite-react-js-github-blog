import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'

export function SearchForm() {
  const { register, handleSubmit } = useForm()

  return (
    <SearchFormContainer>
      <input placeholder="Buscar conteúdo" {...register('q')} />
    </SearchFormContainer>
  )
}
