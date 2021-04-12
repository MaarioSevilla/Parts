import React from 'React';
import {View, StyleSheet, Text} from 'react-native';
import Button from './src/componets/Button';
import Color from './src/componets/Color';
import Title from './src/componets/Title';

function App() {
  return (
    <View style={styles.main}>
      <Title text="Mi título" />
      <Text style={styles.title}>Hola mundo</Text>
      <Button />
      <Color />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  title: {
    color: 'red',
  },
});

export default App;