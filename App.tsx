import 'react-native-get-random-values'

import { Providers } from './src/providers'
import { Home } from './src/screens/home'

export default function App() {
  return (
    <Providers>
      <Home />
    </Providers>
  )
}
