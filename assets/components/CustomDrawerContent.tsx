import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { View, Text, Image } from "react-native";
import { useRouter } from "expo-router";
import styles from "../../styles/global";

export default function CustomDrawerContent(props: DrawerContentComponentProps) {
  const router = useRouter();

  return (
    <DrawerContentScrollView {...props}>
      {/* Profile Section */}
      <View style={{ padding: 20, alignItems: "center" }}>
        <Image
          source={{
            uri: "https://img.sanishtech.com/u/72fd2ec09a6a1c720a370f8e9d39a886.jpg",
          }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text style={styles.profileName}>Iqra Ibrar</Text>
        <Text style={styles.caption}>Developer✨</Text>
      </View>

      {/* Drawer Screens */}
      <DrawerItemList {...props} />

    
    </DrawerContentScrollView>
  );
}
