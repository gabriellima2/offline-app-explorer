import { date, field, text } from "@nozbe/watermelondb/decorators";
import { Model } from '@nozbe/watermelondb'

export class Post extends Model {
  static table: string = 'posts'
  // @ts-ignore
  @text('content') content: string
  // @ts-ignore
  @text('image_url') image_url: string
  // @ts-ignore
  @field('is_liked') is_liked: boolean
  // @ts-ignore
  @date('created_at') created_at!: Date
  // @ts-ignore
  @date('updated_at') updated_at!: Date
  // @ts-ignore
  @date('deleted_at') deleted_at!: Date
}
