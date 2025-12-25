import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Alert, Linking } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRouter } from "expo-router";
import styles from "../../styles/global";
import { navigationRoutes } from "../../constants/navigation";
import { validation, getErrorMessage } from "../../utils/validation";

const JoinClass = () => {
  const router = useRouter();
  const [Classcode, setClasscode] = useState("");
  const [error, setError] = useState("");

  const handleJoinClass = () => {
    setError("");

    if (validation.isEmpty(Classcode)) {
      setError(getErrorMessage('classCode', 'empty'));
      return;
    }

    if (!validation.isValidClassCode(Classcode)) {
      setError(getErrorMessage('classCode', 'invalid'));
      return;
    }

    // Proceed with joining class
    router.push(navigationRoutes.CLASSROOM);
  };

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
          style={{
            borderWidth: 2,
            width: 315,
            height: 58,
            borderColor: error ? 'red' : '#1976D2',
            borderRadius: 10,
            marginLeft: 19,
            marginTop: 10,
            padding: 12,
          }}
          placeholder="Class code"
          value={Classcode}
          onChangeText={setClasscode}
          keyboardType="default"
        />

        {error && <Text style={{ color: 'red', marginLeft: 20, fontSize: 12, marginTop: 8 }}>{error}</Text>}

        <Text style={{padding: 20, fontWeight: 600, fontSize: 15}}>To sign in with a class code</Text>
        <Text style={styles.bullet}>• Use an authorised account</Text>
        <Text style={styles.bullet}>• Use a class code with 6–8 letters or numbers and no spaces or symbols</Text>
      <Text style={styles.disabledText}>Ifyou have trouble joining the class, go to</Text>

       <Text style={styles.helpLink} onPress={() => Linking.openURL('https://support.google.com/edu/classroom')}>
        Help Centre article
       </Text>
       <TouchableOpacity
          style={[styles.primaryButton, !Classcode && styles.disabledButton]}
          onPress={handleJoinClass}
          disabled={!Classcode}
        >
          <Text style={styles.buttonText}>Join Class</Text>
        </TouchableOpacity>
      {/* Bottom Navigation */}
     
         </View>
    </SafeAreaView>
  );
};

export default JoinClass;