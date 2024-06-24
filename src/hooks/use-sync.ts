import { ToastAndroid } from "react-native";
import NetInfo from '@react-native-community/netinfo'

import { sync } from "@/db/sync";

export function useSync() {
  async function handleSync() {
    const state = await NetInfo.fetch()
    if (state.isConnected) {
      try {
        await sync()
      } catch (err) {
        ToastAndroid.show(
          (err as Error).message,
          ToastAndroid.SHORT
        )
      }
    }
  }
  return { handleSync }
}
