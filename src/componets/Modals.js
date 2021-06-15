import React from 'react';
import {View, StyleSheet, Text, Modal} from 'react-native';

function Modals() {
    let {}
    return (
        <Modal
            animationType={'fade'}
            transparent={true}
            visible={show}
            onRequestClose={this.close}
        >
            <View style={{flex:1, backgroundColor:'#000000AA', justifyContent: 'flex-end'}}>

            </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    modal: { 
        paddingTop:80,
        flex: 1,
        alignItems: "flex-end",
        flexDirection: "row"
    },
    emText:{
        color: '#7CBE69',
    }
});

export default Modals;

// <Modal
        //     transparent={true}
        // >
        //     <View style={styles.modal}>
        //         <Text style={styles.emText}>Soy un modal</Text>
        //     </View>
        // </Modal>