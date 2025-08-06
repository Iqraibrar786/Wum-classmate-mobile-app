import React,{useState} from "react";
import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "../styles/global";
import { useRouter } from "expo-router";
const EdirProfileScreen=()=> {
  const router=useRouter();
  function profile(){
      router.push("/profile");
    }
  const [showPassword, setShowPassword] = useState(false);
  return (
    <SafeAreaView style={styles.Container}>
      <View>


      <Text style={styles.profileLabel}>Name</Text>
      <TextInput style={styles.profileInput} />

      <Text style={styles.profileLabel}>E mail address</Text>
      <TextInput style={styles.profileInput} />

      <Text style={styles.profileLabel}>Description</Text>
      <TextInput style={styles.profileInput} />

     
      <Text style={styles.profileLabel}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? 'eye' : 'eye-off'}
            size={22}
            color="#888"
          />
        </TouchableOpacity>
      </View>

       <Text style={styles.profileLabel}>Phone number</Text>
      <View style={styles.phoneContainer}>
        <TextInput style={styles.phoneInput}/>
      </View>

    <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.loginButtonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.secondaryButton,{backgroundColor:"#FFFFFF"},]}>
            <Text style={styles.signUpButtonText}>Discard</Text>
          </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  );
}
export default EdirProfileScreen;