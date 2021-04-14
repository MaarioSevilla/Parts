// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import ElementsScreen from './src/screens/ElementsScreen';

function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={()=> props.navigation.navigate('Two') }>
        <Text>ir a two</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> props.navigation.navigate('Elements') }>
        <Text>ir a Elements</Text>
      </TouchableOpacity>
    </View>
  );
}

function TwoScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen Two</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Elements" component={ElementsScreen} />
        <Stack.Screen name="Two" component={TwoScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;