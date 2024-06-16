import { appSchema, tableSchema } from '@nozbe/watermelondb'

export const schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'posts',
      columns: [
        { name: 'uid', type: 'number', isIndexed: true },
        { name: 'content', type: 'string' },
        { name: 'image_url', type: 'string' },
        { name: 'is_liked', type: 'boolean' },
        { name: 'created_at', type: 'string' }
      ]
    })
  ]
})
