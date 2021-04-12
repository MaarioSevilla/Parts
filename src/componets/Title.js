import React from 'react';
import {StyleSheet, Text} from 'react-native';

function Title({text}) {
  return (
    <Text style={styles.title}>{text}</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'green',
    fontSize: 20,
  },
});

export default Title;
