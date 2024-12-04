import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Divisor() {

  const [state, setState] = useState(1000);

  function handleDiv() {
    const newState = state / 2
    setState(newState);
  }

  function handleReset() {
    setState(1000);
  }

  function handleBack() {
    router.back();
  }

  function handleGoToIndex() {
    router.push('/')
  }

  return (
    <View style={styles.operations}>

      <Text style={styles.title}>{state}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleReset} activeOpacity={0.6} style={styles.divisorButton}>
          <Text style={styles.label}>1000</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDiv} activeOpacity={0.6} style={styles.divisorButton}>
          <Text style={styles.label}>÷2</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={handleBack}>
          <Text style={styles.label}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={handleGoToIndex}>
          <Text style={styles.label}>Tela inicial</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  operations: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    gap: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },


  title: {
    fontSize: 64,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    alignSelf: 'center',
  },
  divisorButton: {
    backgroundColor: 'black',
    padding: 16,
    borderRadius: 100,
    width: "auto",
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    gap: 32,
    justifyContent: 'space-evenly',
  },

  button: {

    backgroundColor: 'black',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  }
});