import React from "react-native";
import {
  View,
  Text,
  Image,
} from "react-native";
import styles from "../styles/global";
import { useFonts } from 'expo-font';
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
const Img = require("../assets/images/class5img.jpg");

const Splash=()=>{
  const router = useRouter();
  setTimeout(()=>{
    router.navigate("onboarding1");
  },3000);
  const [fontsLoaded] = useFonts({
    'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  });
  if (!fontsLoaded){
    return null;
  }
  return (
      <SafeAreaView style={styles.Container}>
          <Image source={Img} style={styles.image} />
          <Text style={styles.mainTitle}><Text style={styles.Elearning}>E-Learning</Text>
          </Text>
      </SafeAreaView>
  );
}
export default Splash;
