import React from "react";
import { View, Text, TextInput, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "../../styles/global";
import { useRouter } from "expo-router";
import { navigationRoutes } from "../../constants/navigation";
const CreateClass = () => {
   const router=useRouter();
                     function classroom(){
                       router.push(navigationRoutes.CLASSROOM);
                     }

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.primaryContainer}>
        {/* Header */}
          <View style={styles.navbarIcon}>
       
          <Text style={styles.navbarIconText}>Create Your class</Text>
    
      </View>

        {/* Input Fields */}
        <TextInput style={styles.textInput}placeholder="Class name (required)"></TextInput>
        <TextInput style={styles.textInput} placeholder="Section"></TextInput>
        <TextInput style={styles.textInput} placeholder="Room"></TextInput>
        <TextInput style={styles.textInput} placeholder="Subject"></TextInput>
      </View>
       <TouchableOpacity style={styles.primaryButton}
       onPress={classroom}>
              <Text style={styles.buttonText}>Create</Text>
            </TouchableOpacity>
    </SafeAreaView>
  );
};
export default CreateClass;
