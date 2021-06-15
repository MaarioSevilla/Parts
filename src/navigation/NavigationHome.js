import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ElementsScreen from '../screens/ElementsScreen';
import HomeScreen from '../screens/HomeScreen';
import TwoScreen from '../screens/TwoScreen';
import FormScreen from '../screens/FormScreen';
import HomeOpScreen from '../screens/HomeOpScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Modals from '../componets/Modals';

import { TouchableOpacity,Text,  Modal,View } from 'react-native';

const getLogo = ({navigation})=> (
  <TouchableOpacity style={{flexDirection:'row'}}>
    <Text style={{color: '#fff'}}>Hola</Text>
    <Text style={{color: '#fff'}}>H★ </Text>
  </TouchableOpacity>
);

const Stack = createStackNavigator();
// const Tab = createMaterialBottomTabNavigator();

function NavigationHome() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" 
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Elements" component={ElementsScreen} />
        <Stack.Screen name="Form" component={FormScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="HomeOp" component={HomeOpScreen} 
          options={
            (props)=>({
              title: '',
              headerStyle:{
                backgroundColor: '#263546',
              },
              headerTintColor: '#fff',
              headerTitleStyle:{
                fontWeight: 'bold',
              },
              headerRight: ()=> getLogo(props),
            })
          }
        />
        <Stack.Screen name="Two" component={TwoScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Modal" component={Modals} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// function MyTabs() {
//     <Tab.Navigator
//       initialRouteName="Feed"
//       activeColor="#e91e63"
//       barStyle={{ backgroundColor: 'tomato' }}
//     >
//       <Tab.Screen
//         name="Feed"
//         component={Feed}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="home" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Notifications"
//         component={Notifications}
//         options={{
//           tabBarLabel: 'Updates',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="bell" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="account" color={color} size={26} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
// }

export default NavigationHome;



{/* <Stack.Screen name="Modal" component={Modals} mode="modal" headerMode="none"
          screenOptions={({props})=>{
            return{
              gestureEnabled: true,
              cardOverlayEnabled: true,
              ...TransitionPresets.ModalPresentationIOS
            };
          }}
          /> */}