import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import CustomDrawerContent from '../../assets/components/CustomDrawerContent';

const Layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={({ navigation }) => ({
          headerShown: true,
          drawerActiveBackgroundColor: 'rgb(147, 147, 215)',
          drawerActiveTintColor: '#fff',

          // 🔹 Menu icon on header (left side)
          headerLeft: () => (
            <Ionicons
              name="menu"
              size={26}
              color="#000"
              style={{ marginLeft: 15 }}
              onPress={() => navigation.toggleDrawer()}  // TO OPRN OR CLOSE THE DRAWER
            />
          ),
        })}
      >
        <Drawer.Screen
          name="notification"
          options={{
            headerTitle: 'My Notifications',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="notifications-outline" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="offlinefiles"
          options={{
            headerTitle: 'Offline Files',
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="file-download-outline" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="settings"
          options={{
            headerTitle: '',
            headerShown: false,
            drawerIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="folder"
          options={{
            title: 'Folder',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="folder-outline" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="help"
          options={{
            title: 'Help',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="help-circle-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer>

       <Drawer.Screen
         name="joinclass"
         options={{
            headerRight: () => (
      <Ionicons
        name="refresh"
        size={22}
        style={{ marginRight: 15 }}
        onPress={() => console.log('Refresh')}
      />
    ),
  }}
  />
    </GestureHandlerRootView>
  );
};

export default Layout;
