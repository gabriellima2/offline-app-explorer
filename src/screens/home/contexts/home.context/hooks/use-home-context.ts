import { useContext } from "react";
import { HomeContext } from "../home.context";

export function useHomeContext() {
  const context = useContext(HomeContext)
  if (!context) throw new Error('Use HomeContext inside HomeProvider')
  return context
}
