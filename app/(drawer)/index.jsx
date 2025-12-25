import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function DrawerIndex() {
  const router = useRouter();
  useEffect(() => {
    // When opening the drawer root, navigate to the tabs (classroom) by default
    router.replace("(tabs)");
  }, []);
  return null;
}