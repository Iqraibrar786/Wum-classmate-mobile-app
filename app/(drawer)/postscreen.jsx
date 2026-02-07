import React, { useState, useLayoutEffect, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter, useNavigation } from "expo-router";

import styles from "../../styles/global";
import { navigationRoutes } from "../../constants/navigation";

/** Reusable Alert Component */
const AlertMessage = ({ message, onClose }) => (
  <View style={styles.alertContainer}>
    <Text style={styles.alertText}>{message}</Text>
    <TouchableOpacity onPress={onClose}>
      <Text style={styles.alertAction}> Add</Text>
    </TouchableOpacity>
  </View>
);

const MaterialUploadScreen = () => {
  const [description, setDescription] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const router = useRouter();
  const navigation = useNavigation();

  /** Navigation handler */
  const handleNavigation = useCallback(
    (route) => {
      router.push(route);
    },
    [router]
  );

  /** Create announcement handler */
  const handleCreate = useCallback(() => {
    if (!description.trim()) {
      setShowAlert(true);
      return;
    }
    setShowAlert(false);
    console.log("Announcement created:", description);
    handleNavigation(navigationRoutes.ANNOUNCEMENT);
  }, [description, handleNavigation]);

  /** Header button */
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.joinButton}
          onPress={handleCreate}
        >
          <Text style={styles.joinButtonText}>Create</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, handleCreate]);

  return (
    <SafeAreaProvider style={styles.Container}>
      <View style={styles.primaryContainer}>
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

        {/* Description input */}
        <TextInput
          style={styles.input}
          placeholder="Announce something to your class..."
          value={description}
          onChangeText={(text) => {
            setDescription(text);
            if (text.trim()) setShowAlert(false);
          }}
          multiline
        />

        {/* Attachment button */}
        <TouchableOpacity
          style={styles.optionRow}
          onPress={() => handleNavigation(navigationRoutes.ATTACHFILEBOTTOMSHEET)}
        >
          <MaterialIcons name="attach-file" size={20} color="#01579b" />
          <Text style={styles.optionText}>Add attachment</Text>
        </TouchableOpacity>
      </View>

      {/* Alert */}
      {showAlert && (
        <AlertMessage
          message="Missing message"
          onClose={() => setShowAlert(false)}
        />
      )}
    </SafeAreaProvider>
  );
};

export default MaterialUploadScreen;
