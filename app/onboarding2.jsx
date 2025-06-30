import React from "react-native";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "../styles/global";
import { useFonts } from 'expo-font';
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from '@expo/vector-icons/FontAwesome';
const Img = require("../assets/class2img.jpg");

const Onboarding2=()=> {
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
        <View style={styles.primaryContainer}>
          
          <Image source={Img} style={styles.image} />
          <Text style={styles.Elearning}> E-Learning</Text>
          <Text style={styles.mainTitle}>Your great future</Text>

           <Text style={styles.subTitle}>
            E-Learning support your class activities,simulation ingagement and help your students by using intutive tools.
          </Text>
          
         {/* Login SignUp Button */}
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.secondaryButton,{backgroundColor:"#FFFFFF"},]}>
            <Text style={styles.signUpButtonText}>Sign-up</Text>
          </TouchableOpacity>
          </View>


        </View>
      </SafeAreaView>
  );
}
export default Onboarding2;
