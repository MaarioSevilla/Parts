import React from 'react';
import {View, StyleSheet} from 'react-native';
import UserActive from '../componets/home/UserActive';
import UserCards from '../componets/home/UserCards';

function HomeOpScreen() {
    return (
      <View style={styles.home}>
         <UserActive/>
         <UserCards/>
      </View>
    );
}

const styles = StyleSheet.create({
    home: {
      backgroundColor: '#F5F5FB',
      paddingTop: 10,
      flex: 1,
      alignItems: 'center',
      //flexDirection: 'row',
      //alignItems: 'center', // no tiene exactamente el mismo efecto que en css
    },
});
  
export default HomeOpScreen;