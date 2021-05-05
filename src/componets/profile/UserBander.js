import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';


function UserBander() {
    return (
        <TouchableOpacity style={styles.btnround}>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.iCone} />
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.bandera} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnround: {
        backgroundColor:'#F2F4F8',
        margin: 4,
        width: 51,
        height: 51,
        maxHeight: 51,
        borderRadius:  51 / 2,
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        borderColor: 'blue', 
    },
    iCone:{
        width: 45,
        height: 45,
        borderRadius:  45 / 2,
    },
    bandera:{
        width: 15,
        height: 15,
        position: 'absolute', 
        bottom: -3, 
    }
});

export default UserBander;
