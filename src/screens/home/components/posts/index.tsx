import { ActivityIndicator, FlatList, Text, View } from "react-native";

import { Post } from "./components/post";
import { useGetAllPosts } from "@/hooks/use-get-all-posts";

export function Posts() {
  const { posts, isLoading } = useGetAllPosts()
  if (isLoading) return <ActivityIndicator />
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={() => <Text>Not found</Text>}
      ItemSeparatorComponent={() => <View style={{ height: 32 }} />}
      contentContainerStyle={{ padding: 12 }}
      renderItem={({ item }) => (
        <Post
          id={item.id}
          content={item.content}
          imageUrl={item.image_url}
          isLiked={item.is_liked}
        />
      )}
    />
  )
}