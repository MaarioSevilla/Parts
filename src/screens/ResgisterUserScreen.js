import React from 'react';
import {View, Button, TextInput, } from 'react-native';

const RegisterUserScreen = () => {
    return(
        <ScrollView>
            <View>
                <TextInput placeholder="Name User"/>
            </View>
            <View>
                <TextInput placeholder="email User"/>
            </View>
            <View>
                <TextInput placeholder="phone User"/>
            </View>
            <View>
                <Button title="save"/>
            </View>
        </ScrollView>
    );
}

export default RegisterUserScreen;