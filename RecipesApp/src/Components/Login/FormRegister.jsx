import React, {useState} from 'react'
import { View, Button, Text,  TextInput, StyleSheet, TouchableHighlight } from "react-native"

// https://reactnative.dev/docs/textinput - textinput

export default function FormLogin() {
  const [inputName, setInputName] = useState(null);
  const [inputEmail, setInputEmail] = useState(null);
  const [inputSenha, setInputSenha] = useState(null);

  function handlerInput(text, set) {
    set(text)
  }

  return(
    <View style={styles.container}>
      <TextInput
        placeholder='Nome'
        style={styles.inputs}
        value={inputName}
        onChangeText={(text) => handlerInput(text, setInputName)}
        multiline={false}
        keyboardType="email-address"
      />
      <TextInput
        placeholder='Email'
        style={styles.inputs}
        value={inputEmail}
        onChangeText={(text) =>  handlerInput(text, setInputEmail)}
        multiline={false}
      />
      <TextInput
        placeholder='Senha'
        style={styles.inputs}
        value={inputSenha}
        onChangeText={(text) => handlerInput(text, setInputSenha)}
        multiline={false}
        secureTextEntry={true}
      />
      <TouchableHighlight
        style={styles.buttons}
        onPress={() => Linking.openURL('https://github.com/GenesisHenriques')}
      >
        <Text>CADASTRAR</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  inputs: {
    color: 'gray',
    borderWidth: 1,
    padding: 15,
    backgroundColor: 'white',
    width: 300,
    fontSize: 15,
    borderBottomWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    margin: 10,
    textAlign: 'center',
  },
  buttons: {
    backgroundColor: '#B6D048',
    alignItems: 'center',
    padding: 19,
    fontSize: 15,
    borderRadius: 10,
    width: 135,
    margin: 10,
  }
});
