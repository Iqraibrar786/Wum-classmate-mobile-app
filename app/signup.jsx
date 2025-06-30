import React from "react";
import {View, Text, TouchableOpacity, TextInput,Image} from "react-native";
import styles from "../styles/global";
import { useFonts } from "expo-font";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
// const MyImg = require("../assets/icon2.png");
// const firstImg = require("../assets/icon1.png");
// const secondImg = require("../assets/icon3.png");

const SignUp = () => {
   const [name, setName] = useState("");
   const [password, setPassword] = useState("");
   const [email, setEmail] = useState("");
   
   const [fontsLoaded] = useFonts({
       "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
       "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
       "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
     });
     
     if (!fontsLoaded) {
       return null;
     }

  return (
    <SafeAreaView sytle={styles.container}>
    <View style={styles.primaryContainer}>
      <Text style={styles.mainTitle}>Create account</Text>
      
      <View style={styles.inputContainer}>
       <TextInput
        style={styles.input}
        placeholder="User Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="User password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      /> 
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
      
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      
      <View style={styles.resendContainer}>
        <Text style={styles.signUpText}>Already have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </View> 
    </SafeAreaView>           
  );
}

export default SignUp;