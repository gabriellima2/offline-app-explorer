import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { useCreatePost } from "./hooks/use-create-post";
import type { CreatePostFields } from "@/schemas/post.schema";

export function CreatePostForm() {
  const { isSubmitting, handleCreate } = useCreatePost()
  const [values, setValues] = useState<CreatePostFields>({ content: '', imageUrl: '' })
  return (
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
      <TouchableOpacity disabled={isSubmitting} onPress={() => handleCreate(values)}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}