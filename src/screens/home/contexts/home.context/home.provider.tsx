import { type PropsWithChildren } from "react";

import { HomeContext } from "./home.context";
import { useGetAllPosts } from "@/hooks/use-get-all-posts";

type HomeProviderProps = PropsWithChildren

export function HomeProvider(props: HomeProviderProps) {
  const { children } = props
  const { posts, refetch, isLoading } = useGetAllPosts()

  async function handleRefetch() {
    await refetch()
  }

  return (
    <HomeContext.Provider value={{ posts, refetch: handleRefetch, isLoading }}>
      {children}
    </HomeContext.Provider>
  )
}
