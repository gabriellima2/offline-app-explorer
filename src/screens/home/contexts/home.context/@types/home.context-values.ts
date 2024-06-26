import { Post } from "@/db/models/post.model"

export type HomeContextValues = {
  posts: Post[] | undefined
  refetch: () => Promise<void>
  isLoading: boolean
}