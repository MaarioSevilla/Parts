import React, {Component} from 'react';
import {Text, TextInput, Button, View, TouchableOpacity} from 'react-native';
import { createStackNavigator} from 'react-navigation';

export default class Home extends Component{
    render(){
        return(
            <view>
                <text>Bienvenido</text>
                <text>,</text>
            </view>
        );
    }
}