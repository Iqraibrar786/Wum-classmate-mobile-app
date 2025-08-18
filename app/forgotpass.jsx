import React, { useState } from 'react';
import styles from "../styles/global";
import { useRouter } from "expo-router";
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import resetpass from './resetpass';

const forgotpass =()=>{
    const router=useRouter();
                       function resetpass(){
                         router.push("/resetpass");
                       }
    const [email, setEmail] = useState("");

    return (
        <View style={styles.Container}>
        <Text style={styles.sideTitle}>Forgot Password</Text>
        <Text style={styles.sideDescription}>Please enter the email associate with your account.</Text>

        <View style={styles.userbtnContainer}>
        <TextInput
          style={styles.textInputBtn}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          placeholderTextColor="#888"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <MaterialIcons name="email" size={24} color="#ccc" />
      </View>
     <TouchableOpacity style={styles.primaryButton}
     onPress={resetpass}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
      </View>
    );
}
export default forgotpass;