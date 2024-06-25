import { useQuery, QueryOptions } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/constants/query-keys'

import { database } from '@/db'
import { Post } from '@/db/models/post.model'
import { useSync } from './use-sync'

type UseGetAllPostsParams = Omit<QueryOptions<Post[]>, 'queryKey' | 'queryFn'>

export function useGetAllPosts(params?: UseGetAllPostsParams) {
  const { handleSync } = useSync()
  const { data: posts, ...rest } = useQuery({
    queryKey: [QUERY_KEYS.POSTS.GET_ALL],
    queryFn: async () => {
      await handleSync()
      return await database.get<Post>('posts').query()
    },
    ...params,
  })
  return { posts, ...rest }
}