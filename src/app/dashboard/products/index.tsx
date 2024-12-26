import { Link } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Products() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Tela de Produtos</Text>
      <View style={styles.separator} />


      <Link href="/dashboard/products/product/10" asChild>
        <TouchableOpacity activeOpacity={0.6} style={styles.button}>
          <Text style={styles.label}>Navegar para produto 10</Text>
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
  },

  separator: {
    marginTop: 32,
    height: 1,
    width: '80%',
    backgroundColor: 'black',
  },
  button: {
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  label: {
    fontSize: 20,
    fontWeight: 'medium',
    color: 'white',
  },

});