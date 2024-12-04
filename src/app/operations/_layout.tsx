import { Stack } from "expo-router";

export default function OperationLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#3e3e3e',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="index" options={{
        title: 'Operações',
      }} />
      <Stack.Screen name="divisor" options={{
        title: 'Divisor',
      }} />
    </Stack>
  );
}