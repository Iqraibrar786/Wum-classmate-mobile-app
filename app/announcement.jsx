import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles/global";
import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Foundation from "@expo/vector-icons/Foundation";
import { TextInput } from "react-native";
const announcement = () => {
  return (
    // First card
    <SafeAreaView style={styles.container}>
      <View style={styles.primaryContainer}>
        {/* Navbar */}
        <View style={styles.navContainer}>
          <TouchableOpacity>
            <Icon name="menu" size={28} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title}>IT 6th sem</Text>
          <TouchableOpacity>
            <Icon name="more-vert" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Card */}
        <LinearGradient
          colors={["#f7c13e", "#2A2575"]}
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
          </View>
        </LinearGradient>

        <View style={styles.responciveContainer}>
          <TouchableOpacity style={styles.announcementBotton}>
            <Text style={styles.announcementBottonText}>
              <FontAwesome name="pencil" size={16} color="black" /> New
              announcement
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.repostBotton}>
            <Text style={styles.repostBottonText}>
              <Entypo name="retweet" size={17} color="black" /> Repost
            </Text>
          </TouchableOpacity>
        </View>

        {/* Card */}

        <View style={styles.lecCard}>
          <View style={styles.topSection}>

             <TouchableOpacity style={{marginLeft:292,marginBottom: -20}}>
            <Icon name="more-vert" size={18} color="#ccc" />
          </TouchableOpacity>
           
          <TouchableOpacity style={{marginTop:10 ,borderRadius: 100,}}>
            <Foundation name="book-bookmark" size={24} color="#f7c13e" /> 
            </TouchableOpacity>

            {/* Text Info */}
            <Text style={styles.lecCardTitle}>New material: Lec-1: DEMO Class room</Text>
            <Text style={styles.lecCardDiscription}> Room</Text>
            <Text style={styles.date}> 4 May</Text>
          </View>
          

          <TextInput
           placeholder="Add class comment"
           placeholderTextColor="#ccc"
           style={styles.commentInput}/>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default announcement;
