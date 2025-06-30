import React from "react";
import { View, Text, TextInput, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "../styles/global";
import Entypo from "@expo/vector-icons/Entypo";
const CreateClass = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.primaryContainer}>
        {/* Header */}
          <View style={styles.navbarIcon}>
        <TouchableOpacity>
          <Entypo name="cross" size={28} color="black" />
        </TouchableOpacity>
          <Text style={styles.navbarIconText}>Create class</Text>
          <Text style={styles.disabledText}>Create</Text>
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
