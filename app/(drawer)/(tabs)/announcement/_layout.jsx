import { Stack } from 'expo-router';

export default function AnnouncementLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}