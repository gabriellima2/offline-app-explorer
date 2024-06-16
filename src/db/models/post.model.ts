import { Model } from '@nozbe/watermelondb'
import { date, field, text } from "@nozbe/watermelondb/decorators";

export class Post extends Model {
  static table: string = 'posts'
  @field('uid') uid: number
  @text('content') content: string
  @text('image_url') image_url: string
  @field('is_liked') is_liked: boolean
  @date('created_at') created_at: Date
}
