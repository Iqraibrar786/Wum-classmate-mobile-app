import { Drawer } from "expo-router/drawer";
import CustomDrawerContent from "../../assets/components/CustomDrawerContent";

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false, // default hidden
      }}
    >
      <Drawer.Screen
        name="home"
        options={{ headerShown: true, title: "Home" }}
      />

      <Drawer.Screen
        name="notifications"
        options={{ headerShown: true, title: "Notifications" }}
      />

      <Drawer.Screen
        name="classroom"
        options={{ headerShown: false }}
      />

      <Drawer.Screen
        name="help"
        options={{ headerShown: true, title: "Help" }}
      />
    </Drawer>
  );
}
