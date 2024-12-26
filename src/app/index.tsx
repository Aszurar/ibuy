import { Link, } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Tela de Sign In</Text>
      <View style={styles.separator} />

      <View style={styles.buttonContainer}>

        <Link href="/dashboard/products" asChild>
          <TouchableOpacity activeOpacity={0.6} style={styles.button}>
            <Text style={styles.label}>Entrar</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/forgot-password" asChild >
          <TouchableOpacity activeOpacity={0.6}>
            <Text style={styles.link}>Esqueci a senha</Text>
          </TouchableOpacity>
        </Link>
      </View>

      <View style={styles.verticalButtonContainer}>
        <Link href="/sign-up" asChild >
          <TouchableOpacity activeOpacity={0.6} style={styles.button}>
            <Text style={styles.label}>Cadastrar</Text>
          </TouchableOpacity>
        </Link>
      </View>
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

  subtitle: {
    fontSize: 32,
    fontWeight: 'medium',
    color: 'gray',
  },

  separator: {
    marginTop: 32,
    height: 1,
    width: '80%',
    backgroundColor: 'black',
  },

  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    gap: 32,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },


  verticalButtonContainer: {
    width: '100%',
    gap: 16,
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

  LinkContainer: {
    flexDirection: 'row',
    width: '100%',
    gap: 32,
    justifyContent: 'space-evenly',
  },
  link: {
    fontSize: 14,
    fontWeight: 'medium',
    color: 'black',
    textDecorationLine: 'underline',
  }
});