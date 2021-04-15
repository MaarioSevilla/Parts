import React from 'react';
import {StyleSheet, Image} from 'react-native';

function Logo() {
  return (
    <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={styles.img} />
    //<Image source={require('./my-icon.png')} />
  );
}

const styles = StyleSheet.create({
  img: {
    width: 150,
    height: 150,
    borderRadius: 20,
    margin: 15,
  },
});

export default Logo;