import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';


function EmptyButton() {
    return (
        <TouchableOpacity style={styles.btnround}>
            <Text style={styles.emText}>Hola</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnround: { 
        backgroundColor:'transparent',
        borderColor: '#7CBE69',
        borderWidth: 1,
        // justifyContent:'center',
        // alignItems:'center',
        paddingBottom:5,
        paddingLeft:15,
        borderRadius: 20,
        paddingRight:15,
        paddingTop:5,
        margin:10,
        borderRadius: 20,
    },
    emText:{
        color: '#7CBE69',
    }
});

export default EmptyButton;
