import React from 'react';
import {StyleSheet, Text, Switch, ScrollView} from 'react-native';
import Button from '../componets/Button';
import Color from '../componets/Color';
import Title from '../componets/Title';
import TxtInput from '../componets/TxtInput';
import Info from '../componets/Info';
import Logo from '../componets/Logo';

function Elements() {
  return (
    <ScrollView
      contentContainerStyle={styles.scr}
      showsVerticalScrollIndicator={false}>
      {/* <View style={styles.main}> */}
      <Text>hola</Text>
      <Title text="Mi título" />
      <Title text="hello" />
      <Logo />
      <TxtInput />
      <Switch />
      <Button />
      <Color />
      <Info />
      {/* </View> */}
    </ScrollView>
  );
}

// const AppStackNavigator = createStackNavigator({
//   Login : LoginPage,
//   Register: RegisterPage,
//   Home: HomePage
// });

const styles = StyleSheet.create({
  scr: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 10,
  },
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
  btn: {
    backgroundColor: 'blue',
  },
});

export default Elements;