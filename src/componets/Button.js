import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

function Button() {
  return (
    <TouchableOpacity style={styles.main}>
      <Text style={styles.title}>Register here</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  main: {
    // height: 50,
    // width: 100,
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:5,
    paddingLeft:15,
    borderRadius: 20,
    paddingRight:15,
    paddingTop:5,
    margin:10,
    borderRadius: 20,
  },
  title: {
    fontSize:16,
    color: 'white',
    textAlign:'center',
  },
});

export default Button;
