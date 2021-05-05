import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';


function RoundedBtn() {
    return (
        <TouchableOpacity style={styles.btnround}>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.iCone} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnround: {
        backgroundColor:'#F2F4F8',
        margin: 4,
        width: 69,
        height: 69,
        maxHeight: 69,
        borderRadius:  69 / 2,
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        borderColor: 'blue', 
    },
    iCone:{
        width: 35,
        height: 35,
    }
});

export default RoundedBtn;
