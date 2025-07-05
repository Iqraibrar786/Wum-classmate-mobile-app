import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "../styles/global";
const MaterialUploadScreen = () => {
  const [text, setText] = useState("");
  const handleAddUser = () => {
    // Handle the add user action here
    console.log("Add user:", text);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.primaryContainer}>
        {/* Navbar */}
        <View style={styles.navContainer}>
          <TouchableOpacity>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Entypo name="share" size={24} color="black" marginLeft={180} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon name="more-vert" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>Lec-1 DEMO Class room</Text>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <View style={styles.dividerLine} />
        </View>

        <Text>This is my test content</Text>
        <Text style={{ fontWeight: 600, fontSize: 15, marginLeft: 1 }}>
          Check out please
        </Text>
        <Text style={{ marginTop: 22, marginBottom: 12, fontSize: 16 }}>
          Attachments
        </Text>

        <View style={styles.attachmentContainer}>
          <View style={styles.attachmentCard}></View>
          <TouchableOpacity style={styles.caption}>
            <Ionicons name="document-attach-sharp" size={20} color="red" /> */
            <Text>Class room app demo UI </Text>
          </TouchableOpacity>

          <View style={styles.attachmentCard}></View>
          <TouchableOpacity style={styles.caption}>
            <MaterialCommunityIcons
              name="attachment"
              size={20}
              color="#01579b"
            />
            <Text>My mind is the extension...</Text>
          </TouchableOpacity>
        </View>

        {/* Comment section */}
        <Text style={styles.profileLabel}>Class comments</Text>
        <View style={styles.userbtnContainer}>
          <TextInput
            style={styles.textInputBtn}
            onChangeText={setText}
            value={text}
            placeholder="Comments"
            placeholderTextColor="#888"
          />
          <TouchableOpacity onPress={handleAddUser}>
            <Ionicons name="send-outline" size={24} color="#888" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default MaterialUploadScreen;
