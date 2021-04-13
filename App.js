import React from 'react';
import {StatusBar,View, StyleSheet, Text, Switch} from 'react-native';
import Button from './src/componets/Button';
import Color from './src/componets/Color';
import Title from './src/componets/Title';
import TxtInput from './src/componets/TxtInput';
import Info from './src/componets/Info'
import Logo from './src/componets/Logo'
//import { NavigationContainer } from 'react-navigation';

function App() {
  return (
    <View style={styles.main}>
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
    paddingTop: 50,
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

export default App;