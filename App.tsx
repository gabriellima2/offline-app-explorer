import 'react-native-get-random-values'
import { useEffect } from 'react'

import { Providers } from './src/providers'
import { Home } from './src/screens/home'

import { useSync } from '@/hooks/use-sync'

export default function App() {
  const { handleSync } = useSync()
 /* useEffect(() => {
    handleSync()
  }, []) */
  return (
    <Providers>
      <Home />
    </Providers>
  )
}
