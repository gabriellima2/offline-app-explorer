import { SyncDatabaseChangeSet, synchronize } from '@nozbe/watermelondb/sync'

import { supabase } from '@/libs/supabase'
import { db } from '.'

await synchronize({
  database: db,
  pullChanges: async ({ lastPulledAt }) => {
    const { data } = await supabase.rpc('pull', { last_pulled_at: lastPulledAt })
    const { changes, timestamp } = data as {
      changes: SyncDatabaseChangeSet
      timestamp: number
    }
    return { changes, timestamp }
  },
  pushChanges: async ({ changes }) => {
    const { error } = await supabase.rpc('push', { changes })
  },
  sendCreatedAsUpdated: true
})
