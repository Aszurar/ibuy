import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { SafeAreaView } from 'react-native';


export default function ProductsLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
            fontWeight: 'bold',
            fontSize: 16,
          }

        }}
      >
        <Tabs.Screen name="index"
          options={{
            headerTitle: 'Produtos',
            tabBarLabel: 'Produtos',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
            tabBarLabelPosition: 'beside-icon'

          }}
        />
        <Tabs.Screen name="orders"
          options={{
            headerTitle: 'Pedidos',
            tabBarLabel: 'Pedidos',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="shopping-bag" size={size} color={color} />
            ),
            tabBarLabelPosition: 'beside-icon'

          }}
        />

        <Tabs.Screen name="product"
          options={{
            tabBarLabel: "Produto",
            tabBarButton: () => null
          }}

        />



      </Tabs>
    </SafeAreaView>
  )
}