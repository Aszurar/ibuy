import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Operations() {
  function handleGoToDivisor() {
    router.navigate('/operations/divisor')
  }

  function handleBack() {
    router.back();
  }

  return (
    <View style={styles.operations}>

      <View>
        <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={handleBack}>
          <Text style={styles.label}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={handleGoToDivisor}>
          <Text style={styles.label}>Go to divisor</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    backgroundColor: 'black',
    padding: 10,
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
  },
});