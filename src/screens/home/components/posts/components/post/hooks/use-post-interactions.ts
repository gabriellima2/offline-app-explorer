import { useState } from "react"
import { ToastAndroid } from "react-native"

import { usePost } from "@/hooks/use-post"
import { useSync } from "@/hooks/use-sync"

export function usePostInteractions() {
  const post = usePost()
  const { handleSync } = useSync()
  const [isDeleting, setIsDeleting] = useState(false)
  const [isLiking, setIsLiking] = useState(false)

  async function handleDelete(id: string) {
    setIsDeleting(true)
    try {
      await post.remove(id)
      await handleSync()
    } catch (err) {
      ToastAndroid.show((err as Error).message, ToastAndroid.SHORT)
    } finally {
      setIsDeleting(false)
    }
  }

  async function handleLikeToggle(id: string, isLiked: boolean) {
    setIsLiking(true)
    try {
      await post.update(id, { is_liked: isLiked })
      await handleSync()
    } catch (err) {
      ToastAndroid.show((err as Error).message, ToastAndroid.SHORT)
    } finally {
      setIsLiking(false)
    }
  }

  return { handleDelete, isDeleting, isLiking, handleLikeToggle }
}