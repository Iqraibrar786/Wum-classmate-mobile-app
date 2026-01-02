import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView,Image } from 'react-native';
import styles from "../../styles/global";
import { useRouter } from "expo-router";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MaterialIcons } from "@expo/vector-icons";
import { navigationRoutes } from "../../constants/navigation";
const Img = require("../../assets/images/class1img.jpg");

const Home = () => {
  const router=useRouter();
                   function createclass(){
                     router.push("/createclass");
                   }
                   function joinclass(){
                     router.push("/joinclass");
                   }
                    function JoinCreate() {
                       router.push(navigationRoutes.JOINCREATE);
                     }
  return (
    <SafeAreaView style={styles.Container}>
      <Text style={styles.helpText}>Don't see your classes?{"\n"}Try another account</Text>
              
       <View style={styles.image}>
        <Image source={Img} style={styles.image} />
        </View>
        <Text style={styles.helpText}>Add a class to get started</Text>
           <TouchableOpacity style={styles.primaryButton}
           onPress={createclass}>
              <Text style={styles.buttonText}>Create class</Text>
            </TouchableOpacity>
             <TouchableOpacity style={styles.transparentButton}
             onPress={joinclass}>
              <Text style={styles.transparentButtonText}>Join class</Text>
            </TouchableOpacity>
             {/* Static Add Button */}
      <TouchableOpacity style={styles.addButton}onPress={JoinCreate}>
        <MaterialIcons name="add" size={28} color="#dea019" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;