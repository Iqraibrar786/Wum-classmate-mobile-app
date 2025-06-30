import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "../styles/global";
import CheckBox from "expo-checkbox";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
const Img = require("../assets/img4.jpeg");
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from "@expo/vector-icons/Ionicons";

const Login = ({ Navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
   const [text, setText] = useState("");
    const handleAddUser = () => {
      // Handle the add user action here
      console.log("Add user:", text);
    };
  
   const [rememberMe, setRememberMe] = useState(false);
  const [fontsLoaded] = useFonts({
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.primaryContainer}>
        <Image source={Img} style={styles.secondImg} />
        <Text style={styles.Elearning}>
          Log in to continue your learning journey
        </Text>

        {/* Email */}
         <View style={styles.userbtnContainer}>
          <TextInput
            style={styles.textInputBtn}
            onChangeText={setText}
            value={text}
            placeholder="Email"
            placeholderTextColor="#888"
          />
          <TouchableOpacity
            onPress={handleAddUser}
            style={styles.button}
            disabled={!text.trim()} // Disable if input is empty
          >
            <MaterialIcons name="email" size={24} color="#ccc" />
          </TouchableOpacity>
        </View>

        {/* Userpassword */}
        <View style={styles.userbtnContainer}>
          <TextInput
            style={styles.textInputBtn}
            placeholder="Password"
            placeholderTextColor="#888"

          />
           <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? 'eye' : 'eye-off'}
            size={22}
            color="#888"
          />
        </TouchableOpacity>
         
        </View>
         <View style={styles.row}>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    value={rememberMe}
                    onValueChange={setRememberMe}
                    tintColors={{ true: '#3D5CFF', false: 'gray' }}
                  />
                  <Text style={styles.rememberText}>Remember me</Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.link}>Forgot password?</Text>
                </TouchableOpacity>
              </View>
        

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => console.log("Login attempt:", email)}
        >
          <Text style={styles.buttonText}>Log in with email</Text>
        </TouchableOpacity>

                       {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Other login options</Text>
          <View style={styles.dividerLine} />
        </View>
        
                     {/* Social Icons */}
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

        <View style={styles.resendContainer}>
          <Text style={styles.signUpText}> Don't have an account? </Text>
          <TouchableOpacity onPress={() => Navigation.navigate("SignUp")}>
            <Text style={styles.link}>Sign Up </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Login;
