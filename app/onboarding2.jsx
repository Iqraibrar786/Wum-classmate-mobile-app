import React from "react-native";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "../styles/global";
import { useFonts } from 'expo-font';
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
const Img = require("../assets/images/class2img.jpg");

const Onboarding2=()=> {
   const router=useRouter();
    function gotosignup(){
      router.push("/signup");
    }
    
    function gotologin(){
      router.push("/login");
    }
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
          <Text style={styles.Elearning}> E-Learning</Text>
          <Text style={styles.mainTitle}>Your great future</Text>

           <Text style={styles.subTitle}>
            E-Learning support your class activities,simulation ingagement and help your students by using intutive tools.
          </Text>
          
         {/* Login SignUp Button */}
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.secondaryButton}
           onPress={gotosignup}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.secondaryButton,{backgroundColor:"#FFFFFF"},]}
            onPress={gotologin}>
            <Text style={styles.signUpButtonText}>Sign-up</Text>
          </TouchableOpacity>
          </View>
      </SafeAreaView>
  );
}
export default Onboarding2;
