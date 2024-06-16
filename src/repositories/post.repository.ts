import { Database } from '@nozbe/watermelondb'

import { db } from '@/db'
import { Post } from '@/db/models/post.model'

import { PostMapper, makePostMapper } from '@/mappers/post.mapper'
import { PostEntity } from '@/entities/post.entity'

export interface PostRepository {
  getAll(): Promise<PostEntity[]>
}

class PostRepositoryImpl implements PostRepository {
  constructor(private database: Database, private mapper: PostMapper) {}
  async getAll(): Promise<PostEntity[]> {
    const _posts = await this.database.get<Post>('posts').query()
    const posts = this.mapper.getAll(_posts)
    return posts
  }
}

export const makePostRepository = () => {
  const mapper = makePostMapper()
  return new PostRepositoryImpl(db, mapper)
}
