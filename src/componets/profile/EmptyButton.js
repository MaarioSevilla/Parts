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
        margin: 4,
        maxHeight: 29,
        // paddingBottom: 4,
        // paddingTop: 4,
        paddingLeft: 19,
        paddingRight:19,
        borderRadius:  12,
        flex: 1,
        alignItems: 'center',
        justifyContent:'center', 
    },
    emText:{
        color: '#7CBE69',
    }
});

export default EmptyButton;
