import { useEffect } from "react";
import { ToastAndroid } from "react-native";
import NetInfo from '@react-native-community/netinfo'

import { sync } from "@/db/sync";

export function useSync() {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected) {
        try {
          sync()
        } catch (err) {
          ToastAndroid.show(
            'Remote data will be synchronized when you have an internet connection',
            ToastAndroid.SHORT
          )
        }
      }
    })
    return unsubscribe
  }, [])
}
