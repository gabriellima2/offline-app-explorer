import { v4 as uuidv4 } from 'uuid';

import { Post } from "@/db/models/post.model";
import { database } from "@/db"

import type { CreatePostDTO } from "@/dtos/post.dto";

export function usePost() {
  async function create(body: CreatePostDTO) {
    await database.write(async () => {
      await database.get<Post>('posts').create((post) => {
        post._raw.id = uuidv4()
        post.content = body.content
        post.imageUrl = body.imageUrl
      })
    })
  }
  return { create }
}
