import { useState } from "react"
import { ToastAndroid } from "react-native"

import { useHomeContext } from "@/screens/home/contexts/home.context"
import { usePost } from "@/hooks/use-post"

export function usePostInteractions() {
  const post = usePost()
  const { refetch } = useHomeContext()
  const [isDeleting, setIsDeleting] = useState(false)
  const [isLiking, setIsLiking] = useState(false)

  async function handleDelete(id: string) {
    setIsDeleting(true)
    try {
      await post.remove(id)
      await refetch()
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
      await refetch()
    } catch (err) {
      ToastAndroid.show((err as Error).message, ToastAndroid.SHORT)
    } finally {
      setIsLiking(false)
    }
  }

  return { handleDelete, isDeleting, isLiking, handleLikeToggle }
}