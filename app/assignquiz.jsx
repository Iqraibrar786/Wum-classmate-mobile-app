import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../styles/global";

const MaterialUploadScreen = () => {
  const [Classcode, setClasscode] = useState("");

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.primaryContainer}>
       
        <Text style={styles.name}>Assignment title (Required)</Text>

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
            style={styles.descriptionInput}
            placeholder="Description"
            value={Classcode}
            onChangeText={setClasscode}
            keyboardType="default"
          />
        </View>
        
        <TouchableOpacity style={styles.optionRow}>
          <MaterialIcons name="attach-file" size={20} color="#01579b" />
          <Text style={styles.optionText}>Add attachment</Text>
        </TouchableOpacity>

        <View style={styles.optionRow}>
          <MaterialIcons
            name="analytics"
            size={24}
            color="#01579b"
            style={{ marginRight: 10 }}
          />
          <Text style={styles.announcementBottonText}>100 points</Text>
        </View>

        <TouchableOpacity style={styles.optionRow}>
          <Entypo name="calendar" size={20} color="#01579b" />
          <Text style={styles.optionText}>Set due date</Text>
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