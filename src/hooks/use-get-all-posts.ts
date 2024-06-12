import { useQuery, QueryOptions } from '@tanstack/react-query'

import { DATABASE_TABLES } from '@/constants/database-tables'
import { QUERY_KEYS } from '@/constants/query-keys'

import { supabase } from '@/libs/supabase'
import type { PostEntity } from '@/entities/post.entity'

type UseGetAllPostsParams = Omit<QueryOptions<PostEntity[]>, 'queryKey' | 'queryFn'>

export function useGetAllPosts(params?: UseGetAllPostsParams) {
  const { data: posts, ...rest } = useQuery({
    queryKey: [QUERY_KEYS.POSTS.GET_ALL],
    queryFn: async () => {
      const response = await supabase.from(DATABASE_TABLES.POSTS).select('*').returns<PostEntity[]>()
      if (response.error) throw response.error
      return response.data
    },
    ...params,
  })
  return { posts, ...rest }
}