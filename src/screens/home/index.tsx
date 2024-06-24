import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { CreatePostForm } from './components/create-post-form';
import { useGetAllPosts } from '@/hooks/use-get-all-posts'

export function Home() {
  const { posts } = useGetAllPosts()
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CreatePostForm />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => <Text>Not found</Text>}
        ItemSeparatorComponent={() => <View style={{ height: 32 }} />}
        contentContainerStyle={{
          padding: 12,
        }}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item.imageUrl }}
              style={{
                width: '100%',
                height: undefined,
                aspectRatio: 4 / 4,
                borderRadius: 12,
              }}
            />
            <View style={{ paddingTop: 12 }}>
              <Text numberOfLines={4}>{item.content}</Text>
              <TouchableOpacity style={{
                backgroundColor: item.isLiked ? '#000000' : '#0000001a',
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'flex-end',
                padding: 12, 
                borderRadius: 12
              }}>
                <Text
                  style={{ color: item.isLiked ? '#ffffff' : '#000000' }}
                >
                  {item.isLiked ? 'Liked' : 'Like'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
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
