import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView,Image } from 'react-native';
import styles from "../styles/global";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MaterialIcons } from '@expo/vector-icons';
const Img = require("../assets/class1img.jpg");

const Home = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.primaryContainer}>
        {/* <View style={styles.navbarIcon}>
          <TouchableOpacity>
                <MaterialIcons name="menu" size={28} color="#000"  marginBottom={-4}/>
                </TouchableOpacity>
                <Text style={styles.navbarIconText}>Google Classroom</Text>
              </View> */}

              <View style={styles.navContainer}>
       {/* Navbar */}
      <TouchableOpacity>
        <Icon name="menu" size={28} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>Google Classroom</Text>
      <TouchableOpacity>
        <Icon name="more-vert" size={24} color="#000"/>
      </TouchableOpacity>
      </View>
               
               <Text style={styles.helpText}>Don't see your classes?{"\n"}Try another account</Text>
              
       <View style={styles.image}>
        <Image source={Img} style={styles.image} />
        </View>
        {/* <Text style={styles.helpText}>Don't see your classes?{"\n"}Try another account</Text> */}
        <Text style={styles.helpText}>Add a class to get started</Text>
           <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.buttonText}>Create class</Text>
            </TouchableOpacity>
             <TouchableOpacity style={styles.transparentButton}>
              <Text style={styles.transparentButtonText}>Join class</Text>
            </TouchableOpacity>
            
             {/* <TouchableOpacity style={styles.addButton}>
        <MaterialIcons name="add" size={28} color="'rgb(147, 147, 215)'" />
      </TouchableOpacity> */}
        </View>
    </SafeAreaView>
  );
};

export default Home;