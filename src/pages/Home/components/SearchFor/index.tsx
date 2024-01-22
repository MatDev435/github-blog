import { useForm } from 'react-hook-form'
import { SearchContainer, SearchForm, SearchFormTop } from './styles'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '../../../../lib/api'
import { useContext } from 'react'
import { PostsContext } from '../../../../contexts/PostsContext'

interface SearchForTypes {
  postsNumber: number
}

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchFor({ postsNumber }: SearchForTypes) {
  const { fetchPosts } = useContext(PostsContext)

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleFormSubmit(data: SearchFormInputs) {
    await fetchPosts(data.query)
  }

  return (
    <SearchContainer>
      <SearchFormTop>
        <h2>Publicações</h2>

        <p>{postsNumber} publicações</p>
      </SearchFormTop>

      <SearchForm onSubmit={handleSubmit(handleFormSubmit)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </SearchForm>
    </SearchContainer>
  )
}
