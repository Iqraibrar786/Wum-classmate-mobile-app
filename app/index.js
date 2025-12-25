import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { useRouter } from "expo-router";

import Splash from "./(auth)/splash";
import Onboarding1 from "./(auth)/onboarding1";

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    // replace to auth splash so it's shown first
    router.replace("/splash");
  }, []);
  return null;
};

export default Index;