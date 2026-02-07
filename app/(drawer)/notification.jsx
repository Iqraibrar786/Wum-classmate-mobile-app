import React from 'react'
import { Text, View,Image } from 'react-native';
import styles from "../../styles/global";
import { SafeAreaProvider } from 'react-native-safe-area-context';
const Img = require("../../assets/images/img3.jpeg");

const notification = () => {
  return (
        <SafeAreaProvider style={styles.container}>
       <View style={styles.image}>
        <Image source={Img} style={styles.image} />
        </View>
         <Text style={styles.subTitle}>
          No notifications
        </Text>
        <Text style={styles.helpText}>Your notification will appear here</Text>
         </SafeAreaProvider>
    )
  }

export default notification;
