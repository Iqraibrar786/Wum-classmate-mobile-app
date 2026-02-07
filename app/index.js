import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { navigationRoutes } from "../constants/navigation";
import Splash from "./splash";
import Onboarding1 from "./(auth)/onboarding1";
const Index = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace(navigationRoutes.SPLASH);
  }, []);
  return null;
};
export default Index;