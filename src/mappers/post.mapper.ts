import { Post } from "@/db/models/post.model";
import { PostEntity } from "@/entities/post.entity";

export interface PostMapper {
  getAll(posts: Post[]): PostEntity[]
}

class PostMapperImpl implements PostMapper {
  getAll(posts: Post[]): PostEntity[] {
    const _posts: PostEntity[] = []
    posts.forEach((post) => {
      _posts.push({ 
        id: post.uid.toString(),
        content: post.content,
        image_url: post.image_url,
        is_liked: post.is_liked,
        created_at: post.created_at.toISOString()
      })
    })
    return _posts
  } 
}

export const makePostMapper = () => new PostMapperImpl()
