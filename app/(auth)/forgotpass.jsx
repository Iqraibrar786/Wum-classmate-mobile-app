import React, { useState } from 'react';
import styles from "../../styles/global";
import { useRouter } from "expo-router";
import { navigationRoutes } from "../../constants/navigation";
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { validation, getErrorMessage } from "../../utils/validation";
// import resetpass from './resetpasss';


const forgotpass =()=>{
    const router=useRouter();
                      
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({});


    const validateForm = () => {
      const newErrors = {};
      if (validation.isEmpty(email)) {
        newErrors.email = getErrorMessage('email', 'empty');
      } 
      else if (!validation.isValidEmail(email)) {
        newErrors.email = getErrorMessage('email', 'invalid');
      }

      setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

     const handleLogin = () => {
    if (!validateForm()) {
      return;
    }

    // If email is valid -> navigate
    router.push(navigationRoutes.RESETPASS);
  };

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

      {/* Error Message */}
      {errors.email && (
        <Text style={{ color: "red", marginLeft: 20, fontSize: 12 }}>
          {errors.email}
        </Text>
      )}


     <TouchableOpacity style={[styles.primaryButton, !email && styles.disabledButton]}
     onPress={handleLogin}
     disabled={!email}
     >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
      </View>
    );
}
export default forgotpass;