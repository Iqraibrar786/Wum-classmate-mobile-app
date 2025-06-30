import React from "react-native";
import {
  View,
  Text,
  Image,
} from "react-native";
import styles from "../styles/global";
import { useFonts } from 'expo-font';
import { SafeAreaView } from "react-native-safe-area-context";
const Img = require("../assets/class5img.jpg");
const Splash=()=>{
  const [fontsLoaded] = useFonts({
    'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  });
  if (!fontsLoaded){
    return null;
  }
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.secondaryContainer}>
          <Image source={Img} style={styles.image} />
          <Text style={styles.mainTitle}><Text style={styles.Elearning}>E-Learning</Text>
          </Text>
          
        </View>
      </SafeAreaView>
  );
}
export default Splash;
