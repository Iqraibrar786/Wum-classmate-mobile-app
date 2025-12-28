import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import CustomDrawerContent from "../../assets/components/CustomDrawerContent";

const Layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: true,
          drawerActiveBackgroundColor: "rgb(147, 147, 215)",
          drawerActiveTintColor: "#fff",
        }}
      >
        <Drawer.Screen
          name="notification"
          options={{
            title: "Notification",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="notifications-outline" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="offlinefiles"
          options={{
            title: "Offline Files",
            drawerIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                name="file-download-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Drawer.Screen name="settings" options={{ title: "Settings" }} />
        <Drawer.Screen name="folder" options={{ title: "Folder" }} />
        <Drawer.Screen name="help" options={{ title: "Help" }} />

        {/* ✅ Join Class Screen */}
        <Drawer.Screen
          name="joinclass"
          options={{ title: "Join Class" }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default Layout;
