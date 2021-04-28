import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Alert} from 'react-native';


function Button() {

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => {
            console.log("OK Pressed")
          } 
        }
      ]
    );

  return (
    <TouchableOpacity style={styles.main} onPress={createTwoButtonAlert}>
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
