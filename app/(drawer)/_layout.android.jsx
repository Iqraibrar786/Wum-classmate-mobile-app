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
          swipeEnabled: true,
          gestureEnabled: true,
          headerShown: true,
          drawerActiveBackgroundColor: "rgb(147, 147, 215)",
          drawerActiveTintColor: "#fff",
        }}
      >
        <Drawer.Screen
          name="classroom"
          options={{
            title: "Classroom",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="notification"
          options={{
            title: "Notification",
            drawerIcon: ({ size, color }) => (
              <Ionicons
                name="notifications-outline"
                size={size}
                color={color}
              />
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
        <Drawer.Screen
          name="archive"
          options={{
            title: "Archive classes",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="archive-outline" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="folder"
          options={{
            title: "Classroom folders",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="folder-outline" size={size} color={color} />
            ),
          }}
        />


        <Drawer.Screen
          name="createclass"
          options={{
            drawerItemStyle: { display: "none" }, // 👈 hides from drawer
          }}
        />
        <Drawer.Screen
          name="index"
          options={{
            drawerItemStyle: { display: "none" }, // 
          }}
        />

        <Drawer.Screen
          name="home"
          options={{
            drawerItemStyle: { display: "none" }, 
            headerTitle: "",
          }}
        />

        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerItemStyle: { display: "none" }, 
             headerTitle: "",
          }}
        />

        <Drawer.Screen
          name="postscreen"
          options={{
            drawerItemStyle: { display: "none" },
          }}
        />

        <Drawer.Screen
          name="assignquiz"
          options={{
            drawerItemStyle: { display: "none" },
          }}
        />

        <Drawer.Screen
          name="askquestion"
          options={{
            drawerItemStyle: { display: "none" },
          }}
        />

        <Drawer.Screen
          name="materialupload"
          options={{
            drawerItemStyle: { display: "none" },
          }}
        />

        <Drawer.Screen
          name="joinclass"
          options={{
            drawerItemStyle: { display: "none" },
          }}
        />

        <Drawer.Screen
          name="classinfo"
          options={{
            drawerItemStyle: { display: "none" },
          }}
        />

        <Drawer.Screen
          name="reusepost"
          options={{
            drawerItemStyle: { display: "none" },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default Layout;
