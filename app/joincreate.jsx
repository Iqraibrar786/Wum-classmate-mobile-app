import React, { useCallback, useRef } from 'react';
import styles from "../styles/global";
import { View, Text,TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
// import Foundation from "@expo/vector-icons/Foundation";
// import Entypo from "react-native-vector-icons/Entypo";
import { useRouter } from "expo-router";
import { navigationRoutes } from "../constants/navigation";
const JoinCreate = () => {
  const router=useRouter();
                           function createclass(){
-                             router.push("/createclass");
+                             router.push(navigationRoutes.CREATECLASS);
                           }
                           function joinclass(){
-                             router.push("/joinclass");
+                             router.push(navigationRoutes.JOINCLASS);
                           }
  const bottomSheetRef = useRef(null);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <GestureHandlerRootView style={styles.bottomSheetcontainer}>
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
      >
        <BottomSheetView style={styles.container}>
                  <View Style={styles.listContainer}></View>
           <TouchableOpacity style={styles.bottomsheetList}onPress={createclass}>
            <MaterialCommunityIcons name="google-classroom" size={24} color="black" />
            <Text style={styles.profileIconText}>Create class</Text>
          </TouchableOpacity>

           <TouchableOpacity style={styles.bottomsheetList}
            onPress={joinclass}>
            <MaterialIcons name="topic" size={24} color="black"/>
            <Text style={styles.profileIconText}>Join class</Text>
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default JoinCreate;