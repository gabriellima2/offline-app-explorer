import { useQuery, QueryOptions } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/constants/query-keys'

import { database } from '@/db'
import { Post } from '@/db/models/post.model'

type UseGetAllPostsParams = Omit<QueryOptions<Post[]>, 'queryKey' | 'queryFn'>

export function useGetAllPosts(params?: UseGetAllPostsParams) {
  const { data: posts, ...rest } = useQuery({
    queryKey: [QUERY_KEYS.POSTS.GET_ALL],
    queryFn: async () => database.get<Post>('posts').query(),
    ...params,
  })
  return { posts, ...rest }
}