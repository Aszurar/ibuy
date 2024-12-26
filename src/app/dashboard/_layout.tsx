import { MaterialIcons } from '@expo/vector-icons';
import { DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { router } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function DashboardLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
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

          {/* add a sign-out button */}

          <DrawerItem label="Sair"
            icon={({ color, size }) => (
              <MaterialIcons name="exit-to-app" size={size} color={color} />
            )}
            onPress={() => {
              router.push('/');
            }} />
        </Drawer>
      </GestureHandlerRootView>
    </SafeAreaView>
  )
}