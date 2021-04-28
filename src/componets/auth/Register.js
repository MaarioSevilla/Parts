import React, { Component } from 'react';
import {Text,View, StyleSheet, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import firebase from 'firebase';

export class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password: '',
            name: ''
        }
        this.onSignUp = this.onSignUp.bind(this);
    }
    onSignUp(){
        const {email,password,name} = this.state;
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((result)=>{
            console.log(result);
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    render() {
        return (
            <View>
                <TextInput
                    placeholder="name"
                    onChangeText={(name)=>this.setState({name})}
                />
                <TextInput
                    placeholder="email"
                    onChangeText={(email)=>this.setState({email})}
                />
                <TextInput
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={(password)=>this.setState({password})}
                />
                <Button
                    onPress={()=> this.onSignUp()}
                    title="Sing up"
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent: 'center'
    },
});

export default Register;
