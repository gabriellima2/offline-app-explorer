import 'react-native-get-random-values'

import { Providers } from './src/providers'
import { Home } from './src/screens/home'

import { useSync } from '@/hooks/use-sync'

export default function App() {
  useSync()
  return (
    <Providers>
      <Home />
    </Providers>
  )
}
