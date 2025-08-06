import React, { Component } from 'react'
import { Text, View,Image } from 'react-native';
import styles from "../styles/global";
import { SafeAreaView } from 'react-native-safe-area-context';
const Img = require("../assets/images/img3.jpeg");

export class notification extends Component {
  render() {
    return (
        <SafeAreaView style={styles.container}>
       <View style={styles.image}>
        <Image source={Img} style={styles.image} />
        </View>
         <Text style={styles.subTitle}>
          No notifications
        </Text>
        <Text style={styles.helpText}>Your notification will appear here</Text>
         </SafeAreaView>
    )
  }
}

export default notification
