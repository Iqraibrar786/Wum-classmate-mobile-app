import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import styles from "../styles/global";
import { useRouter } from "expo-router";
import { navigationRoutes } from "../constants/navigation";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

const Img = require("../assets/images/img3.jpeg");

export default function ClassInfo() {
  const router = useRouter();

  function assigning() {
    router.push(navigationRoutes.ASSIGNING);
  }

  function announcement() {
    router.push(navigationRoutes.ANNOUNCEMENT);
  }

  return (
    <SafeAreaView style={styles.Container}>
      {/* Header */}
      <View style={styles.header}>
        <LinearGradient
          colors={["#dea019", "rgb(147, 147, 215)"]}
          style={styles.header}
        >
          <Text style={styles.classText}>Class Name</Text>
          <Text style={styles.descriptionText}>Description</Text>
        </LinearGradient>
      </View>

      {/* Announcement Box */}
      <TouchableOpacity style={styles.announcementBox} onPress={announcement}>
        <MaterialIcons name="announcement" size={28} color="black" />
        <Text style={styles.announcementText}>
          Announce something to your class
        </Text>
        <AntDesign
          name="retweet"
          size={24}
          color="rgb(147, 147, 215)"
          style={{ marginLeft: 18, alignSelf: "center" }}
        />
      </TouchableOpacity>

      {/* Image */}
      <View style={styles.secondImg}>
        <Image source={Img} style={styles.image} />
      </View>

      <Text
        style={{
          fontSize: 16,
          marginLeft: -5,
          alignSelf: "center",
          marginTop: 60,
          marginBottom: 30,
        }}
      >
        This is where you can talk to our class
      </Text>

      <Text style={styles.helpText}>
        Use the stream to share announcements, post assignments and respond to
        questions
      </Text>
    </SafeAreaView>
  );
}
