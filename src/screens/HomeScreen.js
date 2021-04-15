import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

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