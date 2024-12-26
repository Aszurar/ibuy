import { Link, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type RouteParams = {
  id: string;
}
export default function Product() {
  const { id } = useLocalSearchParams<RouteParams>();
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Tela de detalhes do Produto: {id}</Text>
      <View style={styles.separator} />

      <Link href="/dashboard/settings" asChild>
        <TouchableOpacity activeOpacity={0.6} >
          <Text style={styles.link}>
            Configurações
          </Text>
        </TouchableOpacity>
      </Link>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 32,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 20,
  },

  separator: {
    marginTop: 32,
    height: 1,
    width: '80%',
    backgroundColor: 'black',
  },
  link: {
    fontSize: 14,
    fontWeight: 'medium',
    color: 'black',
    textDecorationLine: 'underline',
  }

});