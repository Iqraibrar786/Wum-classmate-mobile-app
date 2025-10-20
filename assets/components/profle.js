import { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react native";
import { Avatar } from "components/Profile/Avatar";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

export const Profile = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState
(false);
const [image, setImage] = useState();
    
    const uploadImage = async () => {
       try {
        await ImagePicker.
        requestCameraPermissionsAsync();
        let result = await ImagePicker.
        launchCameraAsync({
            CameraType: ImagePicker.CameraType.front,
            allowsEditing: true,
            aspect: [1,1],
            quality: 1,
            
        });
        if (!result.canceled) {
           await saveImage(result.assets[0].uri); 
        }
       } catch (error) {
        alert("Error uploading image: " + error.message);
        setModalVisible(false);
       }
    };
       const saveImage = async (image) => {
        try {
        setImage(image);
        setModalVisible(false);
        }catch ({error}) {
         throw error;
        }
       }; 

       const onLogout = () =>{
        try {

        }catch ({message}) {
            alert("Error logging out: " + message);  
        }
       };
       return (
        <View style={styles.container}>
            <Avatar onButtonPress={() => setModalVisible(true)} />
                <Text style={styles.name}>User Name</Text>
                <Text style={styles.email}>22 years old dev from the country side</Text>
                <Text style={styles.email}>Active since - Aug,2025</Text>
                <SectionHead 
                option= "Edit"
                style={{marginTop: 20}}
                onPress={() => navigation.navigate("EditProfile",{
                id: 1,
                fullName: "User Name",
                bio: "22 years old dev from the country side",
                email: "active@gmail.com",
                phone: "1234567890",
                location: "Earth",
                joinDate: "Aug,2025",
                profileImage: image,
                })}
                />
                Personal Info
        </View>
       )
}