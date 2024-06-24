import { useState } from "react"
import { ToastAndroid } from "react-native"

import { usePost } from "@/hooks/use-post"
import { useSync } from "@/hooks/use-sync"

import { makePostMapper } from "@/mappers/post.mapper"

import type { CreatePostFields } from "@/schemas/post.schema"

const mapper = makePostMapper()

export function useCreatePost() {
  const { create } = usePost()
  const { handleSync } = useSync()
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleCreate(fields: CreatePostFields) {
    setIsSubmitting(true)
    try {
      const mappedCreatePost = mapper.create(fields)
      await create(mappedCreatePost)
      await handleSync()
    } catch (err) {
      ToastAndroid.show( (err as Error).message, ToastAndroid.SHORT)
    } finally {
      setIsSubmitting(false)
    }
  }

  return { isSubmitting, handleCreate }
}