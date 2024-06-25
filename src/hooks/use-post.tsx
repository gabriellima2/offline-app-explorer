import { v4 as uuidv4 } from 'uuid';

import { Post } from "@/db/models/post.model";
import { database } from "@/db"

import type { CreatePostDTO } from "@/dtos/post.dto";
import type { PostEntity } from '@/entities/post.entity';

export function usePost() {
  async function getByID(id: string) {
    return await database.get<Post>('posts').find(id)
  }
  async function create(body: CreatePostDTO) {
    await database.write(async () => {
      await database.get<Post>('posts').create((post) => {
        post._raw.id = uuidv4()
        post.content = body.content
        post.image_url = body.imageUrl
      })
    })
  }

  async function remove(id: string) {
    const post = await getByID(id)
    if (!post) throw new Error(`Post with ID ${id} not found`)
    await post.markAsDeleted()
  }

  async function update(id: string, values: Partial<PostEntity>) {
    await database.write(async () => {
      const post = await getByID(id)
      if (!post) throw new Error(`Post with ID ${id} not found`)
      post.update((data) => {
        if (values.content) {
          data.content = values.content
        }
        if (values.image_url) {
          data.image_url = values.image_url
        }
        if (typeof values.is_liked === 'boolean') {
          data.is_liked = values.is_liked
        }
      })
    })
  }
  
  return { create, getByID, remove, update }
}
