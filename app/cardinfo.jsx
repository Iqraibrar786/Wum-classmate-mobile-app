import React, { useCallback, useRef } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import styles from "../styles/global";

const CardInfo = ({ classData }) => {
  const router = useRouter();
  const bottomSheetRef = useRef(null);

  // GO TO EDIT CLASS SCREEN
  const gotoEditClass = () => {
    router.push({
      pathname: "/(drawer)/createclass",
      params: {
        mode: "edit",
        classData: JSON.stringify(classData),
      },
    });
  };

  // ARCHIVE CLASS ALERT
  const handleArchive = () => {
    Alert.alert(
      "Archive class?",
      "You and your students can view this class in the Archived classes section.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Archive",
          style: "destructive",
          onPress: () => router.push("/(drawer)/archive"),
        },
      ]
    );
  };

  // HANDLE SHEET CHANGES
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <GestureHandlerRootView style={styles.bottomSheetcontainer}>
      <BottomSheet ref={bottomSheetRef} onChange={handleSheetChanges}>
        <BottomSheetView style={styles.container}>
          <View style={styles.listContainer} />

          <TouchableOpacity style={styles.bottomsheetList}>
            <MaterialIcons name="insert-invitation" size={24} color="black" />
            <Text style={styles.profileIconText}>Share invitation link</Text>
          </TouchableOpacity>

          {/* EDIT BUTTON */}
          <TouchableOpacity
            style={styles.bottomsheetList}
            onPress={gotoEditClass}
          >
            <MaterialIcons name="edit-note" size={24} color="black" />
            <Text style={styles.profileIconText}>Edit</Text>
          </TouchableOpacity>

          {/* ARCHIVE BUTTON */}
          <TouchableOpacity
            style={styles.bottomsheetList}
            onPress={handleArchive}
          >
            <MaterialIcons name="unarchive" size={24} color="black" />
            <Text style={styles.profileIconText}>Archive</Text>
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default CardInfo;
