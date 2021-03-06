import React from 'react';
import {Text,View, StyleSheet, Button} from 'react-native';

function Landing({navigation}) {
    return (
        <View style={styles.main}>
            <Button 
                title="Register"
                onPress={()=> navigation.navigate("Register")}/>
            <Button
                title="Login"
                onPress={()=> navigation.navigate("Login")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent: 'center'
    },
});

export default Landing;