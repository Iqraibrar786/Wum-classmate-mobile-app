import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import styles from "../../styles/global";
import { useRouter, useNavigation } from "expo-router";
import { navigationRoutes } from "../../constants/navigation";

const CreateClass = () => {
  const router = useRouter();
  const navigation = useNavigation();

  const handleCreateClass = () => {
    // later you can add validation / API here
    router.push(navigationRoutes.CLASSROOM);
  };

  // ✅ Header Right Create Button
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.joinButton}   // reuse same style as Join
          onPress={handleCreateClass}
        >
          <Text style={styles.joinButtonText}>Create</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.primaryContainer}>

        {/* Input Fields */}
        <TextInput
          style={styles.textInput}
          placeholder="Class name (required)"
        />
        <TextInput style={styles.textInput} placeholder="Section" />
        <TextInput style={styles.textInput} placeholder="Room" />
        <TextInput style={styles.textInput} placeholder="Subject" />
      </View>
    </SafeAreaView>
  );
};

export default CreateClass;
