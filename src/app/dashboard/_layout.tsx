import { MaterialIcons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function DashboardLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerActiveTintColor: 'black',
          drawerInactiveTintColor: 'gray',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
            color: 'black'
          }
        }}
      >
        <Drawer.Screen name="products"
          options={{
            drawerLabel: 'Tela inicial',
            headerTitle: 'Produtos',
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="home" size={size} color={color} />
            )
          }}
        />
        <Drawer.Screen name="settings"
          options={{
            drawerLabel: 'Configurações',
            headerTitle: 'Configurações',
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="settings" size={size} color={color} />
            )
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}