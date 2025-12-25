import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { MaterialIcons } from '@expo/vector-icons';
import styles from "../styles/global";
import { useRouter } from "expo-router";
import { navigationRoutes } from "../constants/navigation";
const MaterialUploadScreen = () => {
    const router=useRouter();
                         function attachments(){
                           router.push(navigationRoutes.ATTACHMENTS);
                         }
  const [Classcode, setClasscode] = useState("");
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.primaryContainer}>
        
        <Text style={styles.name}>Material tital (Required)</Text>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <View style={styles.dividerLine} />
        </View>

        {/* Buttons */}
        <View style={styles.chipsRow}>
          <FontAwesome5 name="users" size={24} color="#888" />
          <TouchableOpacity style={styles.chip}>
            <Ionicons name="person" size={16} color="white" />
            <Text style={styles.chipText}>WUM MAD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chip}>
            <Text style={styles.chipText}>All students</Text>
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <View style={styles.dividerLine} />
        </View>
        <View>
          <TextInput
            style={{
              borderWidth: 2,
              width: 315,
              height: 58,
              borderColor: "#1976D2",
              borderRadius: 10,
              alignSelf: "center",
              marginTop: 10,
              marginBottom: 20,
            }}
            placeholder="Description"
            value={Classcode}
            onChangeText={setClasscode}
            keyboardType="Class-code"
          />
        </View>
        <TouchableOpacity style={styles.optionRow}
        onPress={attachments}>
        <MaterialIcons name="attach-file" size={20} color="#01579b" />
        <Text style={styles.optionText}>Add attachment</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionRow}>
        <MaterialIcons name="subject" size={20} color="#01579b" />
        <Text style={styles.optionText}>Add topic</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default MaterialUploadScreen;
