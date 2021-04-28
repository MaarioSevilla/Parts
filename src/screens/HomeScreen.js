import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import FAB from '../componets/FAB';

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
        <FAB
          text="+"
          fabStyle={{ backgroundColor: "#0066ff" }}
          textStyle={{ color: "#fff" }}
          onPress={
            console.log("funciono")
          }
        />
      </View>
    );
}

export default HomeScreen;

// export default class HomeScreen extends Component {
//     render(){
//         return(
//             <view>
//                 <text>Bienvenido</text>
//                 <text>,</text>
//             </view>
//         );
//     }
// }