import React, { useState } from "react";
import {
  Alert,
  Modal,
  Text,
  Pressable,
  View,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/global";

const TopicAdd = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [Classcode, setClasscode] = useState("");
  
  return (
    <SafeAreaView style={styles.centeredView}>

      {/* Modal Content */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        Alert.alert("Click ok if you want to add topic");
        setModalVisible(!modalVisible);
      }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{ fontSize: 21, marginLeft: -180, marginTop: -20 }}>
              Create Topic
            </Text>
            <Text style={{ marginLeft: -17 }}>
              Topic group assignments under one category.
            </Text>

            {/* Input Field */}
            <TextInput
              style={{
                borderWidth: 2,
                width: 300,
                height: 58,
                borderColor: "rgb(147, 147, 215)",
                borderRadius: 10,
                marginTop: 15,
                marginBottom: -12,
                padding: 15,
              }}
              placeholder="Add topic"
              value={Classcode}
              onChangeText={setClasscode}
              keyboardType="default"
            />

            {/* Action Buttons */}
            <View style={styles.buttonContainer}>
              <Pressable
                style={[styles.secondaryButton, styles.loginButtonText]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.loginButtonText}>Cancel</Text>
              </Pressable>

              <Pressable
                style={[
                  styles.secondaryButton,
                  styles.signUpButtonText,
                  { backgroundColor: "#FFFFFF" },
                ]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.signUpButtonText}>Add</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default TopicAdd;
