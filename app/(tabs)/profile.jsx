import React from "react";
import { View,Image, Text, TouchableOpacity} from "react-native";
import MaterialIcons from 
'@expo/vector-icons/MaterialIcons';
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "../../styles/global";
import { useRouter } from "expo-router";
import { navigationRoutes } from "../../constants/navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
// Local file you uploaded (developer-provided path)
const AVATAR_URI =
  "file:///mnt/data/WhatsApp Image 2025-08-07 at 17.23.39_f3d97384.jpg";

export default function ProfileScreen() {
  const router=useRouter();

    function editprofile(){
      router.push(navigationRoutes.EDITPROFILE);
    }
    function onChangePassword() {
    router.push(navigationRoutes.CHANGEPASSWORD);
  }
    function onSignup() {
    // add logout logic (clear tokens, navigate to auth)
    router.push(navigationRoutes.SIGNUP);
  }
  
  return (
    <SafeAreaProvider style={styles.Container}>
      <View >

        {/* Profile Image and Name */}
        <View style={styles.userprofileContainer}>
          <Image source={{ uri: AVATAR_URI }} style={styles.avatar} />
          <Text style={styles.name}>Iqra Ibrar</Text>
          <Text>shes5748@gmail.com</Text>
          <TouchableOpacity style={styles.editProfileButton}
          onPress={editprofile}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>

           <View style={styles.listContainer}>
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

        <TouchableOpacity style={styles.logoutBtn}
         onPress={onSignup}>
          <Text style={styles.logoutText}>Logout ⎋</Text>
        </TouchableOpacity>
        
      </View>
        </View>
    </SafeAreaProvider>
  );
}
