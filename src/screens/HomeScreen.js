import React, { useState } from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Dimensions, Platform } from 'react-native';
import FAB from '../componets/FAB';

const {width, height} = Dimensions.get('window');

function HomeScreen(props) {
    // const [show, setShow] = useState(false);
    // const showM=()=>{
    //   setShow=true;
    // }
    // const close=()=>{
    //   setShow=false;
    // }
    // render () {
    //     let {show}=this.state
    //     return (
    //         <Modal
    //             animationType={'fade'}
    //             transparent={true}
    //             visible={show}
    //             onRequestClose={this.close}
    //         >
    //             <View style={{flex:1, backgroundColor:'#000000AA', justifyContent: 'flex-end'}}>
    
    //             </View>
    //         </Modal>
    //     );
    // }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.tex}>Home Screen</Text>
        <TouchableOpacity onPress={()=> props.navigation.navigate('Two') }>
          <Text>ir a two</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> props.navigation.navigate('Elements') }>
          <Text>ir a Elements</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> props.navigation.navigate('Form') }>
          <Text>ir a Form</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> props.navigation.navigate('HomeOp') }>
          <Text>ir a home Op</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> props.navigation.navigate('Profile') }>
          <Text>Profile</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={()=> props.navigation.navigate('Modal') }>
          <Text>Modal</Text>
        </TouchableOpacity> */}
        <FAB
          text="+"
          fabStyle={{ backgroundColor: "#0066ff" }}
          textStyle={{ color: "#fff" }}
          onPress={
            console.log("funciono")
          }
        />
      </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
  tex: {
    fontSize: width*0.05,
  },
});