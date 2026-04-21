import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaProvider} from "react-native-safe-area-context";
import styles from "../../../../styles/global";
import { useRouter } from "expo-router";
import { navigationRoutes } from "../../../../constants/navigation";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
const Img = require("../../../../assets/images/img3.jpeg");

const announcement = () => {
  const router = useRouter();

  function assigning() {
    router.push(navigationRoutes.ASSIGNING);
  }

  function classInfo() {
    router.push(navigationRoutes.CLASSINFO);
  }
  return (
    <SafeAreaProvider style={styles.secondaryContainer}>
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
      <TouchableOpacity style={styles.announcementBox} onPress={classInfo}>
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
        style={styles.subTitle}
      >
        This is where you can talk to your class
      </Text>

      <Text style={styles.helpText}>
        Use the stream to share announcements, post assignments and respond to
        questions
      </Text>
    </SafeAreaProvider>
  );
}
export default announcement;