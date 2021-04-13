import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const TxtInput = () => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        placeholder= "username"
        returnKeyType= "next"
        //onSubmitEditing={()=> this.passwordInput.focus()}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        name="password"
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="password"
        placeholderTextColor="#000"
        returnKeyType="go"
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
      />
    </SafeAreaView>
  );
};

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

export default TxtInput;