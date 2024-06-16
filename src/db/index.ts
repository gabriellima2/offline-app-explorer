import { Platform } from 'react-native'
import { Database } from '@nozbe/watermelondb'
import SQLite from '@nozbe/watermelondb/adapters/sqlite'

import { schema } from './schemas'
import { Post } from './models/post.model'

const adapter = new SQLite({
  schema,
  jsi: Platform.OS === 'ios'
})

export const db = new Database({
  adapter,
  modelClasses: [Post]
})
