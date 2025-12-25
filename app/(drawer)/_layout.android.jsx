import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import CustomDrawerContent from '../../assets/components/CustomDrawerContent';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Stack } from "expo-router";

const Layout=()=> {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
       drawerContent={(props) => <CustomDrawerContent {...props} />}
       screenOptions={{
        headerShown: true,
        drawerActiveBackgroundColor: "rgb(147, 147, 215)",
        drawerActiveTintColor: '#fff',
       }}>
        

         <Drawer.Screen name="notification"options={{title: "Notification",drawerLabel: 'Notification',
            drawerIcon: ({ size, color }) => (
              <Ionicons name="notifications-outline" size={size} color={color} />
            ),
          }}
        />
       <Drawer.Screen name="offlinefiles" options={{ title: "Offline Files" }} />
       <Drawer.Screen name="settings" options={{ title: "Settings" }} />
       <Drawer.Screen name="folder" options={{ title: "Folder" }} />
       <Drawer.Screen name="help" options={{ title: "Help" }} />
   </Drawer>
    </GestureHandlerRootView>
  );
}
export default Layout;