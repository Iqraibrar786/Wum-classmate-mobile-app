import * as React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import CustomDrawerContent from '../assets/components/CustomDrawerContent';



const Layout=()=> {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
       drawerContent={(props) => <CustomDrawerContent {...props} />}
       screenOptions={{
        drawerActiveBackgroundColor: '#5363df',
        drawerActiveTintColor: '#fff',
       }}>
        <Drawer.Screen
          name="home"
          options={{
            drawerLabel: 'Home',
            headerTitle: 'Google Classroom',
            drawerIcon: ({ size, color }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
          />

           <Drawer.Screen
          name="calendar"
          options={{
            drawerLabel: 'Calendar',
            headerTitle: 'Google Classroom',
            drawerIcon: ({ size, color }) => (
              <Ionicons name="calendar-clear-outline" size={size} color={color} />
            ),
          }}
        />

           <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: 'Profile',
            headerTitle: 'Google Classroom',
            drawerIcon: ({ size, color }) => (
              <Ionicons name="person-outline" size={size} color={color} />
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