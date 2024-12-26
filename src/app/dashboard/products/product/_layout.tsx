import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native';


export default function ProductLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  )
}