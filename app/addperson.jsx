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

export default function InviteScreen() {
  const [teacherText, setTeacherText] = useState("");
  const [studentText, setStudentText] = useState("");

  const handleAddTeacher = () => {
    console.log("Add teacher:", teacherText);
    setTeacherText(""); // Clear input after adding
  };

  const handleAddStudent = () => {
    console.log("Add student:", studentText);
    setStudentText(""); // Clear input after adding
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.primaryContainer}>

        {/* Teachers Section */}
        <View style={styles.userbtnContainer}>
          <TextInput
            style={styles.textInputBtn}
            onChangeText={setTeacherText}
            value={teacherText}
            placeholder="Teacher"
            placeholderTextColor="#999"
          />
          <TouchableOpacity
            onPress={handleAddTeacher}
            style={styles.button}
            disabled={!teacherText.trim()}
          >
            <Icon
              name="person-add"
              size={24}
              color={teacherText.trim() ? "#dea019" : "#ccc"}
            />
          </TouchableOpacity>
        </View>

        {/* Students Section */}
        <View style={styles.userbtnContainer}>
          <TextInput
            style={styles.textInputBtn}
            onChangeText={setStudentText}
            value={studentText}
            placeholder="Student"
            placeholderTextColor="#999"
          />
          <TouchableOpacity
            onPress={handleAddStudent}
            style={styles.button}
            disabled={!studentText.trim()}
          >
            <Icon
              name="person-add"
              size={24}
              color={studentText.trim() ? "#dea019" : "#ccc"}
            />
          </TouchableOpacity>
        </View>
        
        {/* Image */}
        <Image source={require("../assets/images/class1img.jpg")} style={styles.image} />

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