import React, { useState } from 'react';
import { Text, View , StyleSheet, TextInput, Button} from 'react-native';

function TwoScreen() {
    const [text, onChangeText] = useState("");
    const [number, onChangeNumber] = useState("");
    const [result, setResult] = React.useState("null");

    function ope (){
        let unmounted = false;
        const r =  parseFloat(number)+ parseFloat(text);
        if(!unmounted){
            console.log(r);
            setResult(r);
        }
        return () => {
            unmounted=true;
        }
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Screen Two</Text>
        <TextInput
            style={styles.input}
            placeholder= "number one"
            returnKeyType= "next"
            //onSubmitEditing={()=> this.passwordInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={onChangeText}
            value={text}
        />
        <TextInput
            style={styles.input}
            placeholder= "number two"
            returnKeyType= "next"
            //onSubmitEditing={()=> this.passwordInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={onChangeNumber}
            value={number}
        />
        <Text>{result}</Text>
        <Button
            title="operacion"
            onPress={ope}
            // onPress={() => this.ope('foo')} //con parametros
        />
      </View>
    );
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      width: 340,
      margin: 12,
      borderWidth: 1,
      borderRadius: 15,
      paddingLeft: 20,
      paddingRight: 10,
      backgroundColor: '#F5F4FE',
      borderColor: '#F5F4FE',
      color: 'black',
    },
  });

export default TwoScreen;