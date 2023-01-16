import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'

import { PostsContainer, SearchContainer, SearchHeader } from './styles'

export function Posts() {
  return (
    <PostsContainer>
      <Profile />

      <SearchContainer>
        <SearchHeader>
          <h2>Publicações</h2>
          <span>0 publicações</span>
        </SearchHeader>

        <SearchForm />
      </SearchContainer>
    </PostsContainer>
  )
}
