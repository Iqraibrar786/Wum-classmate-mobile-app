import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
} from "react-native";
import styles from "../../styles/global";
import { useFonts } from 'expo-font';
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
const Img = require("../../assets/images/class5img.jpg");



const Splash=()=>{
  const router = useRouter();
  
  const [fontsLoaded] = useFonts({
    'Poppins-ExtraBold': require('../../assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
  });

  useEffect(() => {
    if (!fontsLoaded) return;
    const timer = setTimeout(() => {
      router.replace("/onboarding1");
    }, 2000);
    return () => clearTimeout(timer);
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
      <SafeAreaView style={styles.Container}>
          <Image source={Img} style={styles.image} />
          <Text style={styles.mainTitle}><Text style={styles.Elearning}>E-Learning</Text>
          </Text>
      </SafeAreaView>
  );
}
export default Splash;
