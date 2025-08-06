import React,{useState} from 'react';
import { View, Text,TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRouter } from "expo-router";
import styles from "../styles/global";
import Entypo from "@expo/vector-icons/Entypo";
const JoinClass = () => {
   const router=useRouter();
                       function home(){
                         router.push("/home");
                       }
                       const routerB=useRouter();
                       function classinfo(){
                         router.push("/classinfo");
                       }
   const [Classcode, setClasscode] = useState("");
  return (
     <SafeAreaView style={styles.container}>
      <View style={styles.primaryContainer}>



         </View>

      {/* Announcement Box */}
      <Text style={{padding:20, marginLeft:5,marginBottom:-17,marginTop: -140}}>You are currently signed in as</Text>
      <TouchableOpacity style={styles.announcementBox}>
        <MaterialCommunityIcons name="google-classroom" size={28} color="black" />
        <Text style={styles.announcementText}>  Anoyone@74645gmail.com</Text>
      </TouchableOpacity>
      <TouchableOpacity>
          <Text style={styles.signUpLink}>Switch account</Text>
        </TouchableOpacity>
        
       {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <View style={styles.dividerLine} />
        </View>

        <Text style={styles.disabledText}>
         Ask your teacher for the class code, then enter it here.
      </Text>

       <TextInput
          style={{ borderWidth:2,width:315, height:58, borderColor:'#1976D2',borderRadius: 10, marginLeft: 19, marginTop: 10}}
          placeholder="Class code"
          value={Classcode}
          onChangeText={setClasscode}
          keyboardType="Class-code"
        />
        
       <Text style={{padding: 20, fontWeight: 600, fontSize: 15}}>To signed in with a class code</Text>
        <Text style={styles.bullet}>• Use an authorised account</Text>
        <Text style={styles.bullet}>• Use a class code with 6–8 letters or numbers and no spaces or symbols</Text>
      <Text style={styles.disabledText}>Ifyou have trouble joining the class, go to</Text>

       <Text style={styles.helpLink} onPress={() => Linking.openURL('https://support.google.com/edu/classroom')}>
        Help Centre article
       </Text>
      {/* Bottom Navigation */}
     
    </SafeAreaView>
  );
};

export default JoinClass;