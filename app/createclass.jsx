import React from "react";
import { View, Text, TextInput, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "../styles/global";
import { useRouter } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
const CreateClass = () => {
   const router=useRouter();
                     function home(){
                       router.push("/home");
                     }
                     const routerB=useRouter();
                     function classinfo(){
                       router.push("/classinfo");
                     }
                      function cardscreen(){
                       router.push("/cardscreen");
                     }

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.primaryContainer}>
        {/* Header */}
          <View style={styles.navbarIcon}>
       
          <Text style={styles.navbarIconText}>Create Your class</Text>
    
      </View>

        {/* Input Fields */}
        <TextInput style={styles.textInput}placeholder="Class name (required)"></TextInput>
        <TextInput style={styles.textInput} placeholder="Section"></TextInput>
        <TextInput style={styles.textInput} placeholder="Room"></TextInput>
        <TextInput style={styles.textInput} placeholder="Subject"></TextInput>
      </View>
    </SafeAreaView>
  );
};
export default CreateClass;
