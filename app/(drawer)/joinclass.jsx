import React, { useState, useLayoutEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Alert, Linking } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRouter, useNavigation } from "expo-router";
import styles from "../../styles/global";
import { navigationRoutes } from "../../constants/navigation";
import { validation, getErrorMessage } from "../../utils/validation";

const JoinClass = () => {
  const router = useRouter();
  const navigation = useNavigation();

  const [classCode, setClassCode] = useState("");
  const [error, setError] = useState("");

  const handleJoinClass = () => {
    setError("");

    if (validation.isEmpty(classCode)) {
      setError(getErrorMessage('classCode', 'empty'));
      return;
    }

    if (!validation.isValidClassCode(classCode)) {
      setError(getErrorMessage('classCode', 'invalid'));
      return;
    }

    // Proceed with joining class
    router.push(navigationRoutes.CLASSROOM);
  };

  // Header Right Join Button with proper state binding
    useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={[
            styles.joinButton,
            !classCode && styles.disabledButton,
          ]}
          onPress={handleJoinClass}
          disabled={!classCode}
        >
          <Text style={styles.joinButtonText}>Join</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, classCode]);


  return (
    <SafeAreaView style={styles.container}>
      <View >
      {/* Announcement Box */}
      <Text style={styles.Elearning}>You are currently signed in as</Text>
      <TouchableOpacity style={styles.announcementBox}>
        <MaterialCommunityIcons name="google-classroom" size={28} color="black" />
        <Text style={styles.announcementText}>  Anoyone@74645gmail.com</Text>
      </TouchableOpacity>
      <TouchableOpacity>
          <Text style={styles.signUpLink}>Switch account</Text>
        </TouchableOpacity>
        
       {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <View style={styles.dividerLine} />
        </View>

        <Text style={styles.disabledText}>
         Ask your teacher for the class code, then enter it here.
      </Text>

       <TextInput
          style={{...styles.classCodeInput, borderColor: error ? "red" : "#1976D2"}}
          placeholder="Enter Class Code"
          value={classCode}
          onChangeText={setClassCode}
          keyboardType="default"
        />

        {error && <Text style={styles.error}>{error}</Text>}

        <Text style={styles.disabledText}>To sign in with a class code</Text>
        <Text style={styles.bullet}>• Use an authorised account</Text>
        <Text style={styles.bullet}>• Use a class code with 6–8 letters or numbers and no spaces or symbols</Text>
      <Text style={styles.disabledText}>If you have trouble joining the class, go to</Text>

       <Text style={styles.helpLink} onPress={() => Linking.openURL('https://support.google.com/edu/classroom')}>
        Help Centre article
       </Text>
      {/* Bottom Navigation */}
     
         </View>
    </SafeAreaView>
  );
};

export default JoinClass;