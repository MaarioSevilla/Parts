import React from 'react';
import {View, StyleSheet} from 'react-native';
import RoundedBtn from '../componets/profile/RoundedBtn';
import EmptyButton from '../componets/profile/EmptyButton';
import UserBander from '../componets/profile/UserBander';

function ProfileScreen() {
    return (
      <View style={styles.home}>
        <View>
         <RoundedBtn/>
         <RoundedBtn/>
         <EmptyButton/>
         <UserBander/>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    home: {
      backgroundColor: '#F9F9FC',
      paddingTop: 10,
      flex: 1,
      alignItems: 'center',
    },
});
  
export default ProfileScreen;