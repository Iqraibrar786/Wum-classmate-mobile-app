import React, { useState } from 'react';
import styles from "../../styles/global";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

const verifiedscreen =()=>{

    const router=useRouter();
                       function classroom(){
                         router.push("/classroom");
                       }
     
    return (
        <SafeAreaView style={styles.Container}>

        <Text style={styles.mainTitle}>Verified!</Text>
        <Text style={styles.subTitle}>Your account has been varified successfully.</Text>


   
     <TouchableOpacity style={styles.primaryButton}
     onPress={classroom}>
              <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
      </SafeAreaView>
    );
}
export default verifiedscreen;