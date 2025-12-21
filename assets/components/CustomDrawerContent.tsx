import {DrawerContentScrollView,DrawerItem,DrawerItemList,} from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { View,Image,Text} from "react-native";
import styles from "../../styles/global";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function CustomDrawerContent(props: any) {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={true}>
        <View style={{padding:20}}>
            <Image
            source={{uri: 'https://i.postimg.cc/5tzrrC04/519526019-17972329046873762-1705704639409662658-n-webp-1.jpg'}}
            style={{width:100, borderRadius:100, height: 100, alignSelf:'center'}}
            />
            <Text style={styles.profileName}>Mr Allah Rakha</Text>
             <Text style={styles.caption}>@_AR</Text>
        </View>
        
        {/* Custom Drawer Items */}
        <DrawerItem
          label="Notifications"
          icon={({ color, size }) => (
            <MaterialIcons name="notifications" size={size} color={color} />
          )}
          onPress={() => router.push("/notifications")}
        />

        <DrawerItem
          label="Classroom"
          icon={({ color, size }) => (
            <MaterialIcons name="class" size={size} color={color} />
          )}
          onPress={() => router.push("/classroom")}
        />

        <DrawerItem
          label="Help"
          icon={({ color, size }) => (
            <MaterialIcons name="help-outline" size={size} color={color} />
          )}
          onPress={() => router.push("/help")}
        />

        <DrawerItem
          label="Logout"
          icon={({ color, size }) => (
            <MaterialIcons name="logout" size={size} color={color} />
          )}
          onPress={() => router.replace("/")}
        />
      </DrawerContentScrollView>
    </View>
  );
}
