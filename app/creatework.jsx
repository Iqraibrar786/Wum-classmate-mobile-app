import React, { useCallback, useRef } from 'react';
import styles from "../styles/global";
import { View, Text,TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Foundation from "@expo/vector-icons/Foundation";
import Entypo from "react-native-vector-icons/Entypo";
import { useRouter } from "expo-router";
const CreateBottomSheet = () => {
  const router=useRouter();
                           function assignquiz(){
                             router.push("/assignquiz");
                           }
                           function postscreen(){
                             router.push("/postscreen");
                           }
                           function topiccreate(){
                             router.push("/topiccreate");
                           }
  // ref
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
          <Text style={styles.mainTitle}>Create</Text>
                  <View Style={styles.listContainer}></View>

           <TouchableOpacity style={styles.bottomsheetList}
           onPress={assignquiz}>
            <MaterialIcons name="assignment" size={24} color="black" />
            <Text style={styles.profileIconText}>Assigment</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomsheetList}
          onPress={assignquiz}>
            <MaterialIcons name="assignment" size={24} color="black" />
            <Text style={styles.profileIconText}>Quiz</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomsheetList}
          onPress={assignquiz}>
           <MaterialIcons name="question-mark" size={24} color="black" />
            <Text style={styles.profileIconText}>Question</Text>
          </TouchableOpacity>

           <TouchableOpacity style={styles.profileList}
           onPress={postscreen}>
           <Foundation name="book-bookmark" size={24} color="#black" />
            <Text style={styles.profileIconText}>Material</Text>
          </TouchableOpacity>

           <TouchableOpacity style={styles.bottomsheetList}>
            <Entypo name="retweet" size={24} color="black"/>
            <Text style={styles.profileIconText}>Reuse Post</Text>
          </TouchableOpacity>

           <TouchableOpacity style={styles.bottomsheetList}
            onPress={topiccreate}>
            <MaterialIcons name="topic" size={24} color="black"/>
            <Text style={styles.profileIconText}>Topic</Text>
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default CreateBottomSheet;