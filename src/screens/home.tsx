import { useState } from 'react'
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { v4 as uuidv4 } from 'uuid';

import { useGetAllPosts } from '@/hooks/use-get-all-posts'

import { sync } from '@/db/sync'
import { database } from '@/db'

import { Post } from '@/db/models/post.model'


type Values = { content: string; imageUrl: string }

export function Home() {
  const { posts } = useGetAllPosts()
  const [values, setValues] = useState<Values>({ content: '', imageUrl: '' } as Values)

  async function handleCreatePost() {
    try {
      const createdPost = await database.write(async () => {
        const newPost = await database.get<Post>('posts').create((post) => {
          post._raw.id = uuidv4()
          post.content = values.content
          post.imageUrl = values.imageUrl
        })
        return newPost
      })
    } catch (err) {
      console.log(err)
    }
  }

  async function syncLocalPosts() {
    try {
      await sync()
      console.log('Success!')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ flex: 1 }}>
        <View>
          <Text>Content</Text>
          <TextInput
            multiline
            value={values.content}
            onChangeText={(t) => setValues((prevState) => ({ ...prevState, content: t }))}
            style={{ borderWidth: 1, borderColor: '#000000' }}
          />
        </View>
        <View>
          <Text>URL</Text>
          <TextInput
            keyboardType='url'
            value={values.imageUrl}
            onChangeText={(t) => setValues((prevState) => ({ ...prevState, imageUrl: t }))}
            style={{ borderWidth: 1, borderColor: '#000000' }}
          />
        </View>
        <TouchableOpacity onPress={handleCreatePost}>
          <Text>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={syncLocalPosts}>
          <Text>Sync</Text>
        </TouchableOpacity>
      </View>
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
