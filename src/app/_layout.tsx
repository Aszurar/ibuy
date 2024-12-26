import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native';

export default function AppLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="sign-up" />
        <Stack.Screen name="forgot-password" />
      </Stack>
    </SafeAreaView>
  )
}