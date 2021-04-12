import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

function Color() {
  const [back, setBack] = useState('black');

  const changeColor = () => {
    if (back === "black") {
      setBack("red");
    } else {
      setBack("black");
    }
  }

  return (
    <TouchableOpacity onPress={changeColor} style={[styles.main, {backgroundColor: back}]}>
      <Text style={styles.title}>Presiona para cambiar de color</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  main: {
    height: 50,
    width: 100,
  },
  title: {
    color: 'white',
  },
});

export default Color;
