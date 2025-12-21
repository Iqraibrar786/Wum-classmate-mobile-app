import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import CustomDrawerContent from '../assets/components/CustomDrawerContent';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const Layout=()=> {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
       drawerContent={(props) => <CustomDrawerContent {...props} />}
       screenOptions={{
        drawerActiveBackgroundColor: "rgb(147, 147, 215)",
        drawerActiveTintColor: '#fff',
       }}>
        <Drawer.Screen
          name="Stream"
          options={{
            drawerLabel: 'Stream',
            headerTitle: 'Google Classroom',
            drawerIcon: ({ size, color }) => (
              <Ionicons name="stream" size={size} color={color} />
            ),
          }}
          />

           <Drawer.Screen
          name="Classwork"
          options={{
            drawerLabel: 'Classwork',
            headerTitle: 'Google Classroom',
            drawerIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="clipboard-multiple-outline" size={24} color="black" />
            ),
          }}
        />

           <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: 'Profile',
            headerTitle: 'Google Classroom',
            drawerIcon: ({ size, color }) => (
              <Ionicons name="face-man-profile" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="notification"
          options={{
            drawerLabel: 'Notification',
            headerTitle: 'Google Classroom',
            drawerIcon: ({ size, color }) => (
              <Ionicons name="notifications-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="offlinefiles"
          options={{
            drawerLabel: 'Offline files',
            headerTitle: 'Google Classroom',
            drawerIcon: ({ size, color }) => (
              <Ionicons name="download-outline" size={size} color={color} />
            ),
          }}
       />

        <Drawer.Screen
          name="archiveclasses"
          options={{
            drawerLabel: 'Archive Classes',
            headerTitle: 'Google Classroom',
            drawerIcon: ({ size, color }) => (
              <Ionicons name="archive-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="folder"
          options={{
            drawerLabel: 'Classroom Folder',
            headerTitle: 'Google Classroom',
            drawerIcon: ({ size, color }) => (
              <Ionicons name="folder-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="setting"
          options={{
            drawerLabel: 'Settingscreen',
            headerTitle: 'Google Classroom',
            drawerIcon: ({ size, color }) => (
              <Ionicons name="settings-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="help"
          options={{
            drawerLabel: 'help',
            headerTitle: 'help',
            drawerIcon: ({ size, color }) => (
              <Ionicons name="help-circle-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
export default Layout;