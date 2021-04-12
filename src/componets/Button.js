import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

function Button() {
  return (
    <TouchableOpacity style={styles.main}>
      <Text style={styles.title}>Soy un botón</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  main: {
    height: 50,
    width: 100,
  },
  title: {
    color: 'red',
  },
});

export default Button;
