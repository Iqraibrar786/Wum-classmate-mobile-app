import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../../styles/global";
import Icon from "react-native-vector-icons/MaterialIcons";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { navigationRoutes } from "../../constants/navigation";

const BackendCard = () => {
  const router = useRouter();

  function announcement() {
    router.push(navigationRoutes.ANNOUNCEMENT);
  }
  function JoinCreate() {
    router.push(navigationRoutes.JOINCREATE);
  }
  function gotocardinfo(){
    router.push(navigationRoutes.CARDINFO);
  }

  // Card data array
  const cardsData = [
    {
      id: 1,
      colors: ["#f7c13e", "#2A2575"],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 0 },
      title: "IT 6th Semester",
      description: "Section B",
      students: "54 students",
    },
    {
      id: 2,
      colors: ["#00F3FF", "#E0B69E"],
      start: { x: 1, y: 0 },
      end: { x: 0, y: 0 },
      title: "Mobile Application",
      description: "Section B",
      students: "4 students",
    },
    {
      id: 3,
      colors: ["#2A2575", "#00FFBC"],
      start: { x: 0, y: 0 },
      end: { x: 2, y: 0 },
      title: "IT 6th Semester",
      description: "Section B",
      students: "12 students",
    },
    {
      id: 4,
      colors: ["#cd6155", "#839192"],
      start: { x: 0, y: 0 },
      end: { x: 2, y: 0 },
      title: "IT 6th Semester",
      description: "Section B",
      students: "4 students",
    },
    {
      id: 5,
      colors: ["rgb(147, 147, 215)", "#00FFBC"],
      start: { x: 0, y: 0 },
      end: { x: 2, y: 0 },
      title: "IT 6th Semester",
      description: "Section B",
      students: "4 students",
    },
    {
      id: 6,
      colors: ["#cd6155", "#899192"],
      start: { x: 0, y: 0 },
      end: { x: 2, y: 0 },
      title: "IT 6th Semester",
      description: "Section B",
      students: "4 students",
    },
    {
      id: 7,
      colors: ["#00F3FF", "#E0B69E"],
      start: { x: 1, y: 0 },
      end: { x: 0, y: 0 },
      title: "Mobile Application",
      description: "Section B",
      students: "4 students",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      {/* Scrollable Content */}
      <ScrollView style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <View style={styles.primaryContainer}>
            {/* Render cards using map */}
            {cardsData.map((card) => (
              <TouchableOpacity key={card.id} onPress={announcement}>
                <LinearGradient
                  colors={card.colors}
                  start={card.start}
                  end={card.end}
                  style={styles.card}
                >
                  <View style={styles.cardContent}>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.cardTitle}>{card.title}</Text>
                      <Text style={styles.descriptionTitle}>
                        {card.description}
                      </Text>
                      <Text style={styles.students}>{card.students}</Text>
                    </View>
                    <TouchableOpacity onPress={gotocardinfo}>
                      <Icon name="more-vert" size={24} color="#fff" />
                    </TouchableOpacity>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>

      {/* Static Add Button */}
      <TouchableOpacity style={styles.addButton}onPress={JoinCreate}>
        <MaterialIcons name="add" size={28} color="#dea019" />
      </TouchableOpacity>
    </View>
  );
};

export default BackendCard;
