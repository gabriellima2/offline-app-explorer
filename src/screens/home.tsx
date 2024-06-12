import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { useGetAllPosts } from '@/hooks/use-get-all-posts'

export function Home() {
  const { posts } = useGetAllPosts()
  console.log(posts)
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
