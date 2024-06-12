import { Text } from 'react-native'
import { SQLiteProvider } from 'expo-sqlite'
import { Suspense, type PropsWithChildren } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '../libs/query-client'
import { OFFLINE_DATABASE_NAME } from '@/constants/offline-database-name'

export function Providers(props: PropsWithChildren) {
  const { children } = props
  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <SQLiteProvider databaseName={OFFLINE_DATABASE_NAME} useSuspense>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </SQLiteProvider>
    </Suspense>
  )
}