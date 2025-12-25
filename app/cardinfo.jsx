import React, { useCallback, useRef } from 'react';
import styles from "../styles/global";
import { View, Text,TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { useRouter } from "expo-router";
const cardinfo = () => {
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

           <TouchableOpacity style={styles.bottomsheetList}>
           <MaterialIcons name="insert-invitation" size={24} color="black" />
            <Text style={styles.profileIconText}>Share invitation link</Text>
          </TouchableOpacity>

           <TouchableOpacity style={styles.bottomsheetList}>
            <MaterialIcons name="edit-note" size={24} color="black" />
            <Text style={styles.profileIconText}>Edit</Text>
          </TouchableOpacity>

           <TouchableOpacity style={styles.bottomsheetList}>
            <MaterialIcons name="unarchive" size={24} color="black" />
            <Text style={styles.profileIconText}>Archive</Text>
          </TouchableOpacity>

        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default cardinfo;