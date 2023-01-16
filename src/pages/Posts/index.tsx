import { Loading } from '../../components/Loading'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'

import {
  PostListContainer,
  PostsContainer,
  SearchContainer,
  SearchHeader,
} from './styles'

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

      <PostListContainer>
        <PostCard />
        <PostCard />
        <PostCard />
      </PostListContainer>

      <Loading />
    </PostsContainer>
  )
}
