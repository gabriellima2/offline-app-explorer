import { SyncDatabaseChangeSet, synchronize } from '@nozbe/watermelondb/sync'

import { database } from './'
import { supabase } from '../libs/supabase'

export async function sync() {
  await synchronize({
    database,
    // with pull changes we should provide the logic to call the remote server pull function
    // that will provide the changes that happened on the server since lastPulledAt
    // Results should be in format SyncDatabaseChangeSet
    pullChanges: async ({ lastPulledAt }) => {
      const { data, error } = await supabase.rpc('pull', {
        last_pulled_at: lastPulledAt ?? 0,
      })
      if (error) throw error.message
      // uncomment this for debugging purposes
      // console.log(JSON.stringify(data, null, 2))
      const { changes, timestamp } = data as {
        changes: SyncDatabaseChangeSet
        timestamp: number
      }
      return { changes, timestamp }
    },
    // with push changes we should provide the logic to call the remote server push function
    // which receives and handles client-side changes from WatermelonDB.
    // the object sent is in format SyncDatabaseChangeSet
    pushChanges: async ({ changes }) => {
      // uncomment this for debugging purposes
      // console.log('changes', JSON.stringify(changes, null, 2))
      const { error } = await supabase.rpc('push', { changes })
      if (error) throw error.message
    },
    // With this setting we expect from server that new rows
    // will return in 'updated' key along with updates.
    // So WatermelonDB will treat them as accordingly.
    sendCreatedAsUpdated: true,
  })
}