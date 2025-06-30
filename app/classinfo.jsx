import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import styles from "../styles/global";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Icon from "react-native-vector-icons/MaterialIcons";

const Img = require("../assets/img3.jpeg");

export default function ClassInfo() {
  const BottomTab = () => {
    const [activeTab, setActiveTab] = useState("Stream");

    const TabItem = ({ icon, label }) => {
      const isActive = activeTab === label;
      return (
        <TouchableOpacity
          onPress={() => setActiveTab(label)}
          style={styles.tabItem}
        >
          <Icon name={icon} size={26} color={isActive ? "#dea019" : "#666"} />
          <Text
            style={[styles.label, { color: isActive ? "#dea019" : "#666" }]}
          >
            {label}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={styles.tabContainer}>
        <TabItem icon="chat" label="Stream" />
        <TabItem icon="assignment" label="Classwork" />
        <TabItem icon="people" label="People" />
        <TabItem icon="profile" label="Profile" />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {" "}
      {/* Fixed Style to style (lowercase) */}
      <View style={styles.primaryContainer}>
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
        <TouchableOpacity style={styles.announcementBox}>
          <MaterialIcons name="announcement" size={28} color="black" />
          <Text style={styles.announcementText}>
            {" "}
            Announce something to your class
          </Text>
          <AntDesign
            name="retweet"
            size={24}
            color="rgb(147, 147, 215)"
            style={{ marginLeft: 18, alignSelf: "center" }}
          />{" "}
          {/* Fixed style prop */}
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
            marginTop: 80,
            marginBottom: 35,
          }}
        >
          This is where you can talk to our class
        </Text>
        <Text style={styles.helpText}>
          Use the stream to share announcements, post assignments and respond to
          questions
        </Text>

        {/* Bottom Tab */}
        <BottomTab />
      </View>
    </SafeAreaView>
  );
}
