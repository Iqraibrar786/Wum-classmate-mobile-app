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

// STATE FOR INPUTS
  const [title, setTitle] = useState(parsedClass?.title || '');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

   // Enable/disable button based on title
  useEffect(() => {
    setIsButtonDisabled(title.trim() === '');
  }, [title]);

// HANDLE CREATE OR EDIT CLASS
  const handleCreateClass = () => {
    if (!title.trim()) return;
    router.push(navigationRoutes.CLASSROOM);
  };

  // ✅ Header Right button conditionally show only if title is not empty
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () =>   (
        <TouchableOpacity
          style={[
            styles.joinButton,
            {opacity: isButtonDisabled ? 0.5 : 1} //dim if disabled
          ]}   
          onPress={handleCreateClass}
          disabled={isButtonDisabled}
        >
          <Text style={styles.joinButtonText}>{isEdit? 'Save' : 'Create'}</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, isEdit, isButtonDisabled]);

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
          value={title}
          onChangeText={setTitle}
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
