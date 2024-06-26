import { useState } from "react"
import { ToastAndroid } from "react-native"

import { useHomeContext } from "@/screens/home/contexts/home.context"
import { usePost } from "@/hooks/use-post"

import { makePostMapper } from "@/mappers/post.mapper"

import type { CreatePostFields } from "@/schemas/post.schema"

const mapper = makePostMapper()

export function useCreatePost() {
  const { create } = usePost()
  const { refetch } = useHomeContext()
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleCreate(fields: CreatePostFields) {
    setIsSubmitting(true)
    try {
      const mappedCreatePost = mapper.create(fields)
      await create(mappedCreatePost)
      await refetch()
    } catch (err) {
      ToastAndroid.show( (err as Error).message, ToastAndroid.SHORT)
    } finally {
      setIsSubmitting(false)
    }
  }

  return { isSubmitting, handleCreate }
}