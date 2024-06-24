import { CreatePostFields } from "@/schemas/post.schema";
import { CreatePostDTO } from "@/dtos/post.dto";

export interface PostMapper {
  create(fields: CreatePostFields): CreatePostDTO
}

class PostMapperImpl implements PostMapper {
  create(fields: CreatePostFields): CreatePostDTO {
    return {
      content: fields.content,
      imageUrl: fields.imageUrl
    }
  }
}

export const makePostMapper = () => new PostMapperImpl()
