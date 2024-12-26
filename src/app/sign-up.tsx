import { router } from 'expo-router';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SignUp() {


  function handleGoBack() {
    if (!router.canGoBack()) {
      return Alert.alert('Você não pode voltar para a tela anterior!');
    }

    router.back();
  }


  return (
    <View style={styles.container}>

      <Text style={styles.title}>Tela de Sign Up</Text>
      <View style={styles.separator} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleGoBack} activeOpacity={0.6} style={styles.button}>
          <Text style={styles.label}>Voltar</Text>
        </TouchableOpacity>
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
  },
  button: {
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 12,
    margin: 10,
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