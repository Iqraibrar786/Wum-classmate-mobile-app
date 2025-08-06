import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "../styles/global";
import { useRouter } from "expo-router";
export default function ProfileScreen() {
  const router=useRouter();
  
    function editprofile(){
      router.push("/editprofile");
    }
  return (
    <SafeAreaView style={styles.Container}>
      <View >

        {/* Profile Image and Name */}
        <View style={styles.userprofileContainer}>
          <Text style={styles.name}>Iqra Ibrar</Text>
          <Text style={styles.username}>shes5748@gmail.com</Text>
          <TouchableOpacity style={styles.editProfileButton}
          onPress={editprofile}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View Style={styles.listContainer}>
          <TouchableOpacity style={styles.profileList}>
            <MaterialIcons name="favorite-border" size={24} color="black" />
            <Text style={styles.profileIconText}>Favourit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileList}>
            <AntDesign name="download" size={24} color="black" />
            <Text style={styles.profileIconText}>Download</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileList}>
            <MaterialIcons name="language" size={24} color="black" />
            <Text style={styles.profileIconText}>Language</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileList}>
            <AntDesign name="delete" size={24} color="black" />
            <Text style={styles.profileIconText}>Clear cash</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileList}>
            <Ionicons name="timer-outline" size={24} color="black" />
            <Text style={styles.profileIconText}>Clear history</Text>
          </TouchableOpacity>
        </View>

        {/* Change password and logout */}
        <TouchableOpacity style={styles.changePasswordBtn}>
          <Text style={styles.changePasswordText}>Change Password 🔒</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutBtn}>
          <Text style={styles.logoutText}>Logout ⎋</Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
}
