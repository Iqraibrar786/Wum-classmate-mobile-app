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
    <SafeAreaView style={styles.container}>
      <View style={styles.primaryContainer}>
        {/* Header */}
          <View style={styles.navbarIcon}>
        <TouchableOpacity
        onPress={home}>
          <Entypo name="cross" size={28} color="black" />
        </TouchableOpacity>
          <Text style={styles.navbarIconText}>Create class</Text>
          <TouchableOpacity
          onPress={cardscreen}>
          <Text style={styles.disabledText}>Create</Text>
          </TouchableOpacity>
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
