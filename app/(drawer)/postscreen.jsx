import React, { useState, useLayoutEffect, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter, useNavigation } from "expo-router";
import styles from "../../styles/global";
import { navigationRoutes } from "../../constants/navigation";
import announcement from "../(tabs)/announcement";

const MaterialUploadScreen = () => {
  const router = useRouter();
  const navigation = useNavigation();

  function announcement() {
    router.push(navigationRoutes.ANNOUNCEMENT);
  }

   function attachfile() {
    router.push(navigationRoutes.ATTACHFILEBOTTOMSHEET);
  }

  const [description, setDescription] = useState("");

  /** Header button */
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles.joinButton} onPress={announcement}>
          <Text style={styles.joinButtonText}>Create</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, announcement]);

  return (
    <SafeAreaView style={styles.Container}>
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

        {/* Description */}

        <TextInput
          style={styles.input}
          placeholder="Announce something to your class..."
          value={description}
          onChangeText={setDescription}
          multiline
        />

        {/* Attachment */}
        <TouchableOpacity style={styles.optionRow} onPress={attachfile}>
          <MaterialIcons name="attach-file" size={20} color="#01579b" />
          <Text style={styles.optionText}>Add attachment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MaterialUploadScreen;
