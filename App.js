//social media

// import React, {Component} from 'react';
// import * as firebase from 'firebase';
// import {View, Text} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Landing from './src/componets/auth/Landing';
// import Register from './src/componets/auth/Register';

// //firebase const
// const firebaseConfig = {
//   apiKey: "AIzaSyDgMwfJijaGzOvDEfDxI1TE_pLs-wrFyN0",
//   authDomain: "social-media-demo-ing.firebaseapp.com",
//   projectId: "social-media-demo-ing",
//   storageBucket: "social-media-demo-ing.appspot.com",
//   messagingSenderId: "916720100041",
//   appId: "1:916720100041:web:dd0eb415ad16361583a318",
//   measurementId: "G-2PV6CSCPK9"
// };

// if(firebase.apps.length === 0){
//   firebase.initializeApp(firebaseConfig);
// }

// const Stack = createStackNavigator();

// // auth state listener

// export class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       loaded: false,
//     }
//   }
//   componentDidMount(){
//     firebase.auth().onAuthStateChanged((user)=>{
//       if(!user){
//         this.setState({
//           loggedIn: false,
//           loaded:true,
//         })
//       }else{
//         this.setState({
//           loggedIn: true,
//           loaded:true,
//         })
//       }
//     })
//   }
//   render() {
//     const { loggedIn, loaded} = this.state;
//     if(!loaded){
//       return(
//         <View>
//           <Text>Loading</Text>
//         </View>
//       );
//     }
//     if(!loggedIn){
//       return(
//         <NavigationContainer>
//           <Stack.Navigator initialRouteName="Landing">
//              <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }}/>
//              <Stack.Screen name="Register" component={Register} />
//           </Stack.Navigator>
//         </NavigationContainer>
//       );
//     }
//     return(
//       <View>
//         <Text>user is login</Text>
//       </View>
//     );
//   }
// }

// export default App



import React from 'react';
import 'react-native-gesture-handler';
import NavigationHome from './src/navigation/NavigationHome';

export default function App() {
  return(
    <NavigationHome/>
  )
}

// import * as React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import 'react-native-gesture-handler';
// import ElementsScreen from './src/screens/ElementsScreen';

// function HomeScreen(props) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <TouchableOpacity onPress={()=> props.navigation.navigate('Two') }>
//         <Text>ir a two</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={()=> props.navigation.navigate('Elements') }>
//         <Text>ir a Elements</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function TwoScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Screen Two</Text>
//     </View>
//   );
// }

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Elements" component={ElementsScreen} />
//         <Stack.Screen name="Two" component={TwoScreen} options={{ headerShown: false }}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
