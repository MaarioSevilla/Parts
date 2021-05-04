import React from 'react';
import {View, Image,ScrollView, TouchableOpacity, Alert, ImageBackground} from 'react-native';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements';
import styles from "../../styles"

function UserActive() {
    return (
      <View style={styles.usera}>
         <ScrollView horizontal={true}>
            {/* <ImageBackground source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.avatar} >
                <View style={styles.badge} />
            </ImageBackground> */}
            <View style={styles.avatar}>                                                                                                                                                                         
                <View style={styles.badge} />                                                                                                                                                                        
            </View>
            <TouchableOpacity style={styles.toi} onPress={() => Alert.alert('image clicked')}>
                <Avatar rounded
                source={{uri: 'https://randomuser.me/api/portraits/men/41.jpg',}}
                        size="large"/>   
                        <Badge
                            status="success"
                            containerStyle={{ position: 'absolute', top: -4, right: -4 }}
                        /> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.toi} onPress={() => Alert.alert('image clicked')}>
                 <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.imgi} />
                 <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.imgism} />
             </TouchableOpacity>
             <TouchableOpacity style={styles.toi} onPress={() => Alert.alert('image clicked')}>
                 <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.imgi} />
             </TouchableOpacity>
             <TouchableOpacity style={styles.toi} onPress={() => Alert.alert('image clicked')}>
                 <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.imgi} />
             </TouchableOpacity>
             <TouchableOpacity style={styles.toi} onPress={() => Alert.alert('image clicked')}>
                 <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.imgi} />
             </TouchableOpacity>
             <TouchableOpacity style={styles.toi} onPress={() => Alert.alert('image clicked')}>
                 <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.imgi} />
             </TouchableOpacity>
             <TouchableOpacity style={styles.toi} onPress={() => Alert.alert('image clicked')}>
                 <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.imgi} />
             </TouchableOpacity>
         </ScrollView>
      </View>
    );
}
// const size = 60;
// const styles = StyleSheet.create({
//       avatar: {                                                                                                                                                                                                        
//         backgroundColor: 'black',
//         borderRadius:  60 / 2,                                                                                                                                                                                    
//         width: 60,                                                                                                                                                                                                   
//         height: 60, 
//         margin: 15,                                                                                                                                                                                                 
//       },                                                                                                                                                                                                               
//       badge: {                                                                                                                                                                                                         
//          backgroundColor: 'red',                                                                                                                                                                                      
//          width: 20,                                                                                                                                                                                                   
//          height: 20,                                                                                                                                                                                                  
//          left: 20,                                                                                                                                                                                                    
//          top: 20,                                                                                                                                                                                                     
//       },
//     usera: {
//       width: '100%',
//       backgroundColor: '#FFFDF8',
//       paddingTop: 10,
//       flex: 1,
//       flexDirection: 'row',
//     //   alignItems: 'flex-end',
//     },
//     toi:{
//         backgroundColor:'#292929',
//         margin: 15,
//         width: 60,
//         height: 60,
//         borderRadius:  size / 2,
//     },
//     imgi: {
//         width: 60,
//         height: 60,
//         borderRadius:  size / 2,
//         backgroundColor: '#FC767C',
        
//     },
//     imgism:{
//         width: 10,
//         height: 10,
//         borderRadius:  10 / 2,
        
//     },
// });
  
export default UserActive;