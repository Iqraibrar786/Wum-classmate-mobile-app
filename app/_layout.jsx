import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="splash" />
      <Stack.Screen name="(drawer)" />
    </Stack>
    </SafeAreaProvider>
    // <Slot />;

  );
}
