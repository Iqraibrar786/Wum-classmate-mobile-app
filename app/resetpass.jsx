import React, { useState } from 'react';
import styles from "../styles/global";
import { useRouter } from "expo-router";
import { Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

const resetpass =()=>{

    const router=useRouter();
                       function verified(){
                         router.push("/verified");
                       }
     const [showPassword, setShowPassword] = useState(false);
     const [password, setPassword] = useState("");

     const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


    return (
        <SafeAreaView style={styles.Container}>

        <Text style={styles.sideTitle}>Reset Password</Text>
        <Text style={styles.sideDescription}>Please enter your new password.</Text>


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
            name={showPassword ? 'eye' : 'eye-off'}
            size={22}
            color="#888"
          />
        </TouchableOpacity>
      </View>


      {/* ResetPassword Input */}
      <View style={styles.userbtnContainer}>
        <TextInput
          style={styles.textInputBtn}
          onChangeText={setPassword}
          value={password}
          placeholder=" Confirm Password"
          placeholderTextColor="#888"
          secureTextEntry={!showPassword}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={toggleShowPassword}>
          <Ionicons
            name={showPassword ? 'eye' : 'eye-off'}
            size={22}
            color="#888"
          />
        </TouchableOpacity>
      </View>

     <TouchableOpacity style={styles.primaryButton}
     onPress={verified}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
      </SafeAreaView>
    );
}
export default resetpass;