import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { HomeProvider } from './contexts/home.context/home.provider'
import { CreatePostForm } from './components/create-post-form'
import { Posts } from './components/posts'

export function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <HomeProvider>
        <CreatePostForm />
        <Posts />
      </HomeProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 44
  },
})
