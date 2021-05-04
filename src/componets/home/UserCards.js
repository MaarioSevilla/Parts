import React from 'react';
import {View, Image,ScrollView, TouchableOpacity, Alert,Text, ImageBackground, StyleSheet} from 'react-native';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements';

function UserCards() {
    return (
      <View style={styles.usercards}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.userCard}>
                <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.imgicon} />
                <Text>Hola</Text>
            </View>
            <View style={styles.userCard}>
                <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.imgicon} />
                <Text>Hola</Text>
            </View>
            <View style={styles.userCard}>
                <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.imgicon} />
                <Text>Hola</Text>
            </View>
          </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
    usercards: {
              width: '100%',
              backgroundColor: '#F5F5FB',
              paddingTop: 10,
            },
    userCard:{
        width: 170,
        height: 120,
        backgroundColor: 'white',
        margin:6,
        flexDirection: 'column',
        alignItems:'center',
    },
    imgicon:{
        width: 60,
        height: 60,
        borderRadius:  60 / 2,
        // position: 'absolute', 
        top: -20, 
        // right: -4
    }
});
  
export default UserCards;