import React, { useLayoutEffect } from "react";
import {View,Text,TextInput,SafeAreaView,TouchableOpacity} from "react-native";
import styles from "../../styles/global";
import { useRouter, useNavigation } from "expo-router";
import { navigationRoutes } from "../../constants/navigation";
import { useLocalSearchParams, Stack } from 'expo-router';
import { useEffect, useState } from 'react';

const CreateClass = () => {
  const router = useRouter();
  const navigation = useNavigation();

// Get mode and classData from params
  const { mode, classData } = useLocalSearchParams();
  const isEdit = mode === 'edit';

  const parsedClass = classData ? JSON.parse(classData) : {};

  const [title, setTitle] = useState(parsedClass?.title || '');
  const [description, setDescription] = useState(parsedClass?.description || '');


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
          <Text style={styles.joinButtonText}>{isEdit? 'Save' : 'Create'}</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, isEdit]);

   return (
    <>
      {/* ✅ AUTO HEADER CHANGE */}
      <Stack.Screen
        options={{
          title: isEdit ? 'Edit Class' : 'Create Class',
        }}
      />

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

    </>
  );
};

export default CreateClass;
