import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "../styles/global";
import CheckBox from "expo-checkbox";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const Login = () => {
  const router = useRouter();
  function forgotpass() {
    router.push("/forgotpass");
  }
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [fontsLoaded] = useFonts({
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });

  const handleLogin = () => {
    // Basic validation
    if (!email.trim() || !password.trim()) {
      alert("Please enter both email and password");
      return;
    }
    console.log("Login attempt with:", { email, password, rememberMe });
    router.push("/otp");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.Container}>
      <Text style={styles.Elearning}>
        Log in to continue your learning journey
      </Text>

      {/* Email Input */}
      <View style={styles.userbtnContainer}>
        <TextInput
          style={styles.textInputBtn}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          placeholderTextColor="#888"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <MaterialIcons name="email" size={24} color="#ccc" />
      </View>

      {/* Password Input */}
      <View style={styles.userbtnContainer}>
        <TextInput
          style={styles.textInputBtn}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry={!showPassword}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={toggleShowPassword}>
          <Ionicons
            name={showPassword ? "eye" : "eye-off"}
            size={22}
            color="#888"
          />
        </TouchableOpacity>
      </View>

      {/* Remember Me & Forgot Password */}
      <View style={styles.row}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={rememberMe}
            onValueChange={setRememberMe}
            tintColors={{ true: "#3D5CFF", false: "gray" }}
          />
          <Text style={styles.rememberText}>Remember me</Text>
        </View>
        <TouchableOpacity onPress={forgotpass}>
          <Text
            style={{
              marginRight: -40,
              marginLeft: 80,
              color: "rgb(28, 117, 234)",
              fontWeight: "500",
              textDecorationLine: "underline",
            }}
          >
            Forgot password?
          </Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      {/* Add disabled state on login button when field are empty */}
      <TouchableOpacity
        style={[
          styles.primaryButton,
          (!email || !password) && styles.disabledButton,
        ]}
        onPress={handleLogin}
        disabled={!email || !password}
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

      {/* Sign Up Link */}
      <View style={styles.resendContainer}>
        <Text style={styles.signUpText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => router.push("/signup")}>
          <Text style={styles.link}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
