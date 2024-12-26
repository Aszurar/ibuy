import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Tela de Pedidos</Text>
      <View style={styles.separator} />

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

});