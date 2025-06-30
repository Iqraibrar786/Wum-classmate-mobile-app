import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from "../styles/global";
import { StatusBar } from "expo-status-bar";
import AntDesign from '@expo/vector-icons/AntDesign';

const Otp = () => {
  const numberOfInputs = 4;                                        //<----Define how many OTP digits the user must inputs
  const [otp, setOtp] = useState(Array(numberOfInputs).fill('')); //<----Initialize array of 4 empty strings each OTP digit is separately
  const inputsRef = useRef([]);                                  //<---- Use REF array keep track each input field DOM reference

  const handleChange = (text, index) => {
    if (isNaN(text)) return;                                     //<----- Restrict input to numbers only

    const newOtp = [...otp];                                   //<---- Copy current OTP state
    newOtp[index] = text;                                     //<---- Update the OTP state with the new digit at the current index
    setOtp(newOtp);                                           //<---- Set new OTP state

    if (text && index < numberOfInputs - 1) {                 //<--- Automatically move the focus to the next input if digit is entered
      inputsRef.current[index + 1].focus();                  //      (unless it is the last field )
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {  //<---Detect user validation when Backspace key is pressed 
      inputsRef.current[index - 1].focus();                                 // if the current input is empty it moves focus back to the
    }                                                                       // previous input (unless it is the first field)
  };

  const handleContinue = () => {                                   //<--- input update and auto-focus on the next field.       
    const code = otp.join('');                                    //<--- Combine OTP digits into a single string
    console.log('OTP Submitted:', code);                         //<--- OTP is combined into a string and logged(verified) or send to back
  };

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.primaryContainer}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.sideTitle}>OTP Verification!{<>    </>}</Text>

      {/* Phone Number Section */}
      <Text style={styles.sideDescription}>
        Enter 4-digit code we have sent at  <Text style={styles.phoneNumber}>+91-123 456 7890</Text>
      </Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => {
          let style = styles.inputDefault;

          if (digit !== '') {
            style = styles.inputFilled;
          } else if (index === otp.findIndex(val => val === '')) {
            style = styles.inputActive;
          }

          return (
            <TextInput
              key={index}
              style={[styles.inputBox, style]}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={text => handleChange(text, index)}
              onKeyPress={e => handleKeyPress(e, index)}
              ref={ref => (inputsRef.current[index] = ref)}
            />
          );
        })}
      </View>

      <Text style={styles.sideDescription}>This session will end in 60 seconds.</Text>


      <View style={styles.resendContainer}>
        <Text style={styles.signUpText}>Didn't get code?{' '}</Text>
        <TouchableOpacity>
          <Text style={styles.link}>Resend Code</Text>
        </TouchableOpacity>
        </View>

      <TouchableOpacity style={styles.primaryButton} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

export default Otp;












