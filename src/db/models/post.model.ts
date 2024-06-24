import { date, field, text } from "@nozbe/watermelondb/decorators";
import { Model } from '@nozbe/watermelondb'

export class Post extends Model {
  static table: string = 'posts'
  // @ts-ignore
  @text('content') content: string
  // @ts-ignore
  @text('image_url') imageUrl: string
  // @ts-ignore
  @field('is_liked') isLiked: boolean
  // @ts-ignore
  @date('created_at') createdAt!: Date
  // @ts-ignore
  @date('updated_at') updatedAt!: Date
  // @ts-ignore
  @date('deleted_at') deletedAt!: Date
}
