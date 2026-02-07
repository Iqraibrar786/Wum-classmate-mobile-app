import React, { useCallback, useRef } from "react";
import styles from "../styles/global";
import { View, Text, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Foundation from "@expo/vector-icons/Foundation";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Octicons from "@expo/vector-icons/Octicons";
// import Feather from '@expo/vector-icons/Feather';
import { useRouter } from "expo-router";
const AttachfileBottomSheet = () => {
  //   const router=useRouter();
  //                            function assignquiz(){
  //                              router.push(navigationRoutes.ASSIGNQUIZ);
  //                            }
  //                            function postscreen(){
  //                              router.push(navigationRoutes.POSTSCREEN);
  //                            }
  //                            function topiccreate(){
  //                              router.push(navigationRoutes.TOPICCREATE);
  //                            }
  // ref
  const bottomSheetRef = useRef(null);

  // callbacks
  const handleSheetChanges = (index) => {
    if (index === -1) {
      console.log("Bottom sheet closed");
    }
  };

  // renders
  return (
    <GestureHandlerRootView style={styles.bottomSheetcontainer}>
      <BottomSheet ref={bottomSheetRef} onChange={handleSheetChanges}>
        <BottomSheetView style={styles.container}>
          {/* <Text style={styles.mainTitle}>Create</Text> */}
          <View Style={styles.listContainer}></View>

          <TouchableOpacity style={styles.bottomsheetList}>
            <MaterialIcons name="add-to-drive" size={24} color="black" />
            <Text style={styles.profileIconText}>Add from Drive</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomsheetList}>
            <Entypo name="link" size={24} color="black" />
            <Text style={styles.profileIconText}>Insert link</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomsheetList}>
            <Octicons name="upload" size={24} color="black" />
            <Text style={styles.profileIconText}>Upload file</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileList}>
            <MaterialIcons name="add-photo-alternate" size={24} color="black" />
            <Text style={styles.profileIconText}>Choose photo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomsheetList}>
            <MaterialIcons name="add-a-photo" size={24} color="black" />
            <Text style={styles.profileIconText}>Take photo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomsheetList}>
            <AntDesign name="video-camera" size={24} color="black" />
            <Text style={styles.profileIconText}>Record Vedio</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
          </View>

          <TouchableOpacity style={styles.bottomsheetList}>
            <MaterialIcons name="picture-as-pdf" size={24} color="red" />
            <Text style={styles.profileIconText}>Create new PDF</Text>
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default AttachfileBottomSheet;
