import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { useCreatePost } from "./hooks/use-create-post";
import type { CreatePostFields } from "@/schemas/post.schema";
import { Button } from "@/components/button";
import { Input } from "@/components/input";

export function CreatePostForm() {
  const { isSubmitting, handleCreate } = useCreatePost()
  const [values, setValues] = useState<CreatePostFields>({ content: '', imageUrl: '' })
  return (
    <View>
      <View>
        <Text>Content</Text>
        <Input
          multiline
          value={values.content}
          onChangeText={(t) => setValues((prevState) => ({ ...prevState, content: t }))}
        />
      </View>
      <View>
        <Text>URL</Text>
        <Input
          keyboardType='url'
          value={values.imageUrl}
          onChangeText={(t) => setValues((prevState) => ({ ...prevState, imageUrl: t }))}
        />
      </View>
      <Button isLoading={isSubmitting} onPress={() => handleCreate(values)}>
        Create
      </Button>
    </View>
  )
}