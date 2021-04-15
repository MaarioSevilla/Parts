import React from 'react';
import {View, StyleSheet, Text, Switch} from 'react-native';
import Button from '../componets/Button';
import Color from '../componets/Color';
import Title from '../componets/Title';
import TxtInput from '../componets/TxtInput';
import Info from '../componets/Info';
import Logo from '../componets/Logo';

function Elements() {
  return (
    <View style={styles.main}>
        <Text>hola</Text>
      <Title text="Mi título" />
      <Title text="hello" />
      <Logo/>
      <TxtInput/>
      <Switch />
      <Button />
      <Color />
      <Info/>
    </View>
  );
}

// const AppStackNavigator = createStackNavigator({
//   Login : LoginPage,
//   Register: RegisterPage,
//   Home: HomePage
// });

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#FFFDF8',
    paddingTop: 10,
    flex: 1,
    alignItems: 'center',
    //flexDirection: 'row',
    //alignItems: 'center', // no tiene exactamente el mismo efecto que en css
  },
  title: {
    color: 'red',
  },
  btn:{
    backgroundColor: 'blue',
    
  }
});

export default Elements;