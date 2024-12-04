import { Link } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Double() {
  const [state, setState] = useState(1);

  function handleSum() {
    setState(state * 2);
  }

  function handleReset() {
    setState(1);
  }


  return (
    <View style={styles.container}>

      <Text style={styles.title}>{state}</Text>
      <View style={styles.separator} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleReset} activeOpacity={0.6} style={styles.button}>
          <Text style={styles.label}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSum} activeOpacity={0.6} style={styles.button}>
          <Text style={styles.label}>x2</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.LinkContainer}>


        <Link href="/" asChild>
          <TouchableOpacity activeOpacity={0.6} style={styles.button}>
            <Text style={styles.label}>{'<'} </Text>
          </TouchableOpacity>
        </Link>

        <Link href="/operations" asChild>
          <TouchableOpacity activeOpacity={0.6} style={styles.button}>
            <Text style={styles.label}>{'>'} </Text>
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
    fontSize: 64,
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
    padding: 10,
    borderRadius: 100,
    margin: 10,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  label: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },

  LinkContainer: {
    flexDirection: 'row',
    width: '100%',
    gap: 32,
    justifyContent: 'space-evenly',
  }
});