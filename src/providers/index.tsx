import { Text } from 'react-native'
import { Suspense, type PropsWithChildren } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '../libs/query-client'

export function Providers(props: PropsWithChildren) {
  const { children } = props
  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </Suspense>
  )
}