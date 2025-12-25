import React from "react";
import {View, Text, TouchableOpacity, TextInput,Image} from "react-native";
import styles from "../../styles/global";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const SignUp = () => {
     const router=useRouter();
      function gotologin(){
        router.push("/login");
      }
      function gotoclassroom(){
        router.push("/classroom");
      }
   const [name, setName] = useState("");
   const [password, setPassword] = useState("");
   const [email, setEmail] = useState("");
    const [showPassword, setShowPassword] = useState(false);
   
   const [fontsLoaded] = useFonts({
       "Poppins-ExtraBold": require("../../assets/fonts/Poppins-ExtraBold.ttf"),
       "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
       "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
     });

      const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
     
     if (!fontsLoaded) {
       return null;
     }

  return (
    <SafeAreaView style={styles.Container}>
      <Text style={styles.Elearning}>SignUp!</Text>
      <Text style={styles.mainTitle}>Create account</Text>
      
      <View style={styles.inputContainer}>
       <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      </View>

      {/* Email TetxInput */}
       <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      </View>
       
       {/* user password */}
       <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
         placeholderTextColor="#888"
        onChangeText={setPassword}
                 secureTextEntry={!showPassword}
          autoCapitalize="none"
      /> 
       <TouchableOpacity onPress={toggleShowPassword}>
          <Ionicons
            name={showPassword ? 'eye' : 'eye-off'}
            size={22}
            marginLeft={-38}
            color="#888"
          />
        </TouchableOpacity>
        </View>
      
       <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>SignUp with</Text>
        <View style={styles.dividerLine} />
      </View>
      <View style={styles.boxContainer}>
        <TouchableOpacity style={styles.iconBox}>
          <FontAwesome6 name="facebook-f" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconBox}>
          <AntDesign name="google" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconBox}>
          <Entypo name="linkedin" size={24} color="black" />
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={styles.primaryButton}
      onPress={gotoclassroom}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      
      <View style={styles.resendContainer}>
        <Text style={styles.signUpText}>Already have an account?</Text>
        <TouchableOpacity
        onPress={gotologin}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>           
  );
}

export default SignUp;