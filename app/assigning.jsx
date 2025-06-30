import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../styles/global";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import { MaterialIcons } from "@expo/vector-icons";
const Img = require("../assets/img5.jpg");

const AssigningScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.primaryContainer}>
        <View style={styles.navContainer}>
          {/* Navbar */}
          <TouchableOpacity>
            <Icon name="menu" size={28} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title}>IT 6th sem</Text>
          <TouchableOpacity>
            <Icon name="more-vert" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        {/* Image */}
        <View style={styles.image}>
          <Image source={Img} style={styles.secondImg} />
        </View>

        {/* Instructuins */}
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

        <TouchableOpacity style={styles.addButton}>
          <MaterialIcons name="add" size={28} color="#dea019" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default AssigningScreen;
