import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../styles/global";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
const Img = require("../assets/images/img5.jpg");

const AssigningScreen = () => {
  const router = useRouter();

  function creatework() {
    router.push("/creatework");
  }
  return (
    <SafeAreaView style={styles.primaryContainer}>
      {/* Image */}
      <View style={styles.image}>
        <Image source={Img} style={styles.secondImg} />
      </View>

      {/* Instructions */}
      <Text
        style={{
          fontSize: 17,
          alignSelf: "center",
          marginTop: 180,
          marginBottom: 50,
          marginLeft: -38,
        }}
      >
        This is where you'll assign work
      </Text>
      <Text
        style={{
          marginBottom: 50,
          marginTop: -20,
          marginLeft: 15,
          color: "#888",
          alignSelf: "center",
        }}
      >
        You can add assigments and other work for the class, then organise it
        into topics
      </Text>

      <TouchableOpacity style={styles.addButton} onPress={creatework}>
        <MaterialIcons name="add" size={28} color="#dea019" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default AssigningScreen;
