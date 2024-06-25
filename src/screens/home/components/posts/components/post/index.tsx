import { Image, Text, TouchableOpacity, View } from "react-native";
import { usePostInteractions } from "./hooks/use-post-interactions";

type PostProps = {
  id: string
  content: string
  imageUrl: string
  isLiked: boolean
}

export function Post(props: PostProps) {
  const { isDeleting, handleDelete, isLiking, handleLikeToggle } = usePostInteractions()
  return (
    <View>
      <Image source={{ uri: props.imageUrl }}
        style={{
          width: '100%',
          height: undefined,
          aspectRatio: 4 / 4,
          borderRadius: 12,
        }}
      />
      <View style={{ paddingTop: 12 }}>
        <Text numberOfLines={4}>{props.content}</Text>
        <TouchableOpacity
          disabled={isLiking}
          onPress={() => handleLikeToggle(props.id, !props.isLiked)}
          style={{
            backgroundColor: props.isLiked ? '#000000' : '#0000001a',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'flex-end',
            padding: 12, 
            borderRadius: 12
        }}>
          <Text
            style={{ color: props.isLiked ? '#ffffff' : '#000000' }}
          >
            {props.isLiked ? 'Liked' : 'Like'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={isDeleting}
          onPress={() => handleDelete(props.id)}
          style={{
            backgroundColor: '#0000001a',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'flex-end',
            padding: 12, 
            borderRadius: 12
        }}>
          <Text
            style={{ color: '#000000' }}
          >
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}