import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import styles from "../styles/global";
import Icon from "react-native-vector-icons/MaterialIcons";
const Img = require("../assets/class1img.jpg");

export default function InviteScreen() {
  const [text, setText] = useState("");
  const handleAddUser = () => {
    // Handle the add user action here
    console.log("Add user:", text);
  };

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

        {/* Teachers Section */}
        <View style={styles.userbtnContainer}>
          <TextInput
            style={styles.textInputBtn}
            onChangeText={setText}
            value={text}
            placeholder="Teacher"
            placeholderTextColor="#999"
          />
          <TouchableOpacity
            onPress={handleAddUser}
            style={styles.button}
            disabled={!text.trim()} // Disable if input is empty
          >
            <Icon
              name="person-add"
              size={24}
              color={text.trim() ? "#dea019" : "#ccc"}
            />
          </TouchableOpacity>
        </View>

        {/* Students Section */}
        <View style={styles.userbtnContainer}>
          <TextInput
            style={styles.textInputBtn}
            onChangeText={setText}
            value={text}
            placeholder="Student"
            placeholderTextColor="#999"
          />
          <TouchableOpacity
            onPress={handleAddUser}
            style={styles.button}
            disabled={!text.trim()} // Disable if input is empty
          >
            <Icon
              name="person-add"
              size={24}
              color={text.trim() ? "#dea019" : "#ccc"}
            />
          </TouchableOpacity>
        </View>
        {/* Image */}

        <Image source={Img} style={styles.image} />

        {/* Invite Text */}
        <Text style={styles.subTitle}>Invite students to your class</Text>

        {/* Invite Button */}
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Invite</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
