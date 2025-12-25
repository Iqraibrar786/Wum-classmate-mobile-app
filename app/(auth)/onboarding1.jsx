import React from "react-native";
import { Text, Image, TouchableOpacity } from "react-native";
import styles from "../../styles/global";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
const Img = require("../../assets/images/class5img.jpg");

const Onboarding1 = () => {
  const router=useRouter();

  function gotoonboarding2(){
    router.push("/onboarding2");
  }
  function gotosplash(){
    router.push("/splash")
  }
  
  const [fontsLoaded] = useFonts({
    "Poppins-ExtraBold": require("../../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.Container}>
        {/* Image */}
        <Image source={Img} style={styles.image} />
        <Text style={styles.mainTitle}>
          Welcome to the online<Text style={styles.Elearning}> E-Learning</Text>{" "}
          App
        </Text>
        <Text style={styles.subTitle}>
          Learn easy and fast with E-Learning support your class activities
        </Text>
           
        {/* Buttons */}
        <TouchableOpacity style={styles.primaryButton}
          onPress={gotoonboarding2}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.transparentButton}
         onPress={gotosplash}>
          <Text style={styles.transparentButtonText}>skip</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Onboarding1;
