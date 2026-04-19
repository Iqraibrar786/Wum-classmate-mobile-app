import React, { useState, useLayoutEffect, useCallback } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useRouter, useNavigation } from "expo-router";
import styles from "../../styles/global";
import { navigationRoutes } from "../../constants/navigation";

/** Alert Component */
const AlertMessage = ({ message, onClose }) => (
  <View style={styles.alertContainer}>
    <Text style={styles.alertText}>{message}</Text>
    <TouchableOpacity onPress={onClose}>
      <Text style={styles.alertAction}>Close</Text>
    </TouchableOpacity>
  </View>
);

const MaterialUploadScreen = () => {
  const [description, setDescription] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const router = useRouter();
  const navigation = useNavigation();

  /** 🔙 Back */
  const handleBack = useCallback(() => {
    router.replace(navigationRoutes.ASSIGNING);
  }, [router]);

  /** ✅ Assign */
  const handleAssign = useCallback(() => {
    if (!description.trim()) {
      setShowAlert(true);
      return;
    }

    setShowAlert(false);
    console.log("Assignment:", description);
    router.push(navigationRoutes.ANNOUNCEMENT);
  }, [description, router]);

  /** 🧭 Header */
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={handleBack} style={{ marginLeft: 10 }}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity style={styles.joinButton} onPress={handleAssign}>
          <Text style={styles.joinButtonText}>Assign</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, handleBack, handleAssign]);

  return (
    <SafeAreaProvider style={styles.secondaryContainer}>
      <View>

        {/* Title */}
        <Text style={styles.name}>Assignment title (Required)</Text>

         {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <View style={styles.dividerLine} />
        </View>

         {/* Audience chips */}
        <View style={styles.chipsRow}>
          <FontAwesome5 name="users" size={22} color="#888" />
          <TouchableOpacity style={styles.chip}>
            <Ionicons name="person" size={16} color="#fff" />
            <Text style={styles.chipText}>WUM MAD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chip}>
            <Text style={styles.chipText}>All students</Text>
          </TouchableOpacity>
        </View>

         {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <View style={styles.dividerLine} />
        </View>


        {/* Input */}
        <TextInput
          style={styles.descriptionInput}
          placeholder="Description"
          value={description}
          onChangeText={(text) => {
            setDescription(text);
            if (text.trim()) setShowAlert(false);
          }}
        />

        {/* Attachment */}
        <TouchableOpacity style={styles.optionRow}>
          <MaterialIcons name="attach-file" size={20} color="#01579b" />
          <Text style={styles.optionText}>Add attachment</Text>
        </TouchableOpacity>

         {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <View style={styles.dividerLine} />
        </View>

        {/* Points */}
        <View style={styles.optionRow}>
          <MaterialIcons name="analytics" size={24} color="#01579b" />
          <Text style={styles.announcementBottonText}>100 points</Text>
        </View>

        {/* Due Date */}
        <TouchableOpacity style={styles.optionRow}>
          <Text style={styles.optionText}>Set due date</Text>
        </TouchableOpacity>

        {/* Topic */}
        <TouchableOpacity style={styles.optionRow}>
          <Text style={styles.optionText}>Add topic</Text>
        </TouchableOpacity>
      </View>
      
         {/* 🔴 Alert */}
      {showAlert && (
        <AlertMessage
          message="Missing title"
          onClose={() => setShowAlert(false)}
        />
      )}
    </SafeAreaProvider>
  );
};

export default MaterialUploadScreen;