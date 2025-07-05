import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from "expo-linear-gradient"
import styles from "../styles/global";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
const BackendCard = () => {
   const router=useRouter();
                         function announcement(){
                           router.push("/announcement");
                         }
  return (
    // First card
    <SafeAreaView style={styles.container}>
      <View style={styles.primaryContainer}>


        <View style={styles.navContainer}>
          {/* Navbar */}
          <TouchableOpacity>
            <Icon name="menu" size={28} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title}>IT 6th sem</Text>
          <TouchableOpacity>
            <Icon name="more-vert" size={24} color="#000" />
          </TouchableOpacity>
        </View>

    {/* first card */}
    <TouchableOpacity
    onPress={announcement}>
    <LinearGradient
      colors={['#f7c13e',"#2A2575"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.card}
    >
      <View style={styles.cardContent}>
        <View style={{ flex: 1 }}>
          <Text style={styles.cardTitle}>IT 6th Semester</Text>
          <Text style={styles.descriptionTitle}>Section B</Text>
          <Text style={styles.students}>54 students</Text>
        </View>
        <TouchableOpacity>
        <Icon name="more-vert" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
    </TouchableOpacity>


    {/* Second card */}
    <TouchableOpacity>
    <LinearGradient
      colors={[ '#00F3FF',"#E0B69E"]}
      start={{ x: 1, y: 0 }}
      // end={{ x: 0, y: 0 }}
      style={styles.card}
    >
      <View style={styles.cardContent}>
        <View style={{ flex: 1 }}>
          <Text style={styles.cardTitle}>Mobile Application</Text>
          <Text style={styles.descriptionTitle}>Section B</Text>
          <Text style={styles.students}>4 students</Text>
        </View>
        <TouchableOpacity>
        <Icon name="more-vert" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
    </TouchableOpacity>


      {/* Third card */}
      <TouchableOpacity>
    <LinearGradient
      colors={["#2A2575", '#00FFBC']}
      start={{ x: 0, y: 0 }}
      end={{ x: 2, y: 0 }}
      style={styles.card}
    >
      <View style={styles.cardContent}>
        <View style={{ flex: 1 }}>
          <Text style={styles.cardTitle}>IT 6th Semester</Text>
          <Text style={styles.descriptionTitle}>Section B</Text>
          <Text style={styles.students}>12 students</Text>
        </View>
        <TouchableOpacity>
        <Icon name="more-vert" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
    </TouchableOpacity>

    {/* Forth card */}
    <TouchableOpacity>
    <LinearGradient
      colors={["#cd6155", '#839192']}
      start={{ x: 0, y: 0 }}
      // end={{ x: 2, y: 0 }}
      style={styles.card}
    >
      <View style={styles.cardContent}>
        <View style={{ flex: 1 }}>
          <Text style={styles.cardTitle}>IT 6th Semester</Text>
          <Text style={styles.descriptionTitle}>Section B</Text>
          <Text style={styles.students}>4 students</Text>
        </View>
        <TouchableOpacity>
        <Icon name="more-vert" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
    </TouchableOpacity>

      {/* Fifth card */}
       <TouchableOpacity>
     <LinearGradient
      colors={['rgb(147, 147, 215)', '#00FFBC']}
      start={{ x: 0, y: 0 }}
      end={{ x: 2, y: 0 }}
      style={styles.card}
    >
      <View style={styles.cardContent}>
        <View style={{ flex: 1 }}>
          <Text style={styles.cardTitle}>IT 6th Semester</Text>
          <Text style={styles.descriptionTitle}>Section B</Text>
          <Text style={styles.students}>4 students</Text>
        </View>
        <TouchableOpacity>
        <Icon name="more-vert" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
    </TouchableOpacity>
    
      {/* Add button */}
     <TouchableOpacity style={styles.addButton}>
        <MaterialIcons name="add" size={28} color="#dea019"/>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};
export default BackendCard;