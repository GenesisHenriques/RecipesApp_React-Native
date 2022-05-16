import React, {useState} from 'react'
import { View, Button, Text,  TextInput, StyleSheet, TouchableHighlight } from "react-native"

// https://reactnative.dev/docs/textinput - textinput

export default function FormLogin() {
  const [imputName, setImputName] = useState(null);
  const [imputEmail, setImputEmail] = useState(null);
  const [imputSenha, setImputSenha] = useState(null);

  function handlerImput(text, set) {
    set(text)
  }

  return(
    <View style={styles.container}>
      <TextInput
        placeholder='Nome'
        style={styles.imputs}
        value={imputName}
        onChangeText={(text) => handlerImput(text, setImputName)}
        multiline={false}
        keyboardType="email-address"
      />
      <TextInput
        placeholder='Email'
        style={styles.imputs}
        value={imputEmail}
        onChangeText={(text) =>  handlerImput(text, setImputEmail)}
        multiline={false}
      />
      <TextInput
        placeholder='Senha'
        style={styles.imputs}
        value={imputSenha}
        onChangeText={(text) => handlerImput(text, setImputSenha)}
        multiline={false}
        secureTextEntry={true}
      />
      <TouchableHighlight
        style={styles.buttons}
        onPress={() => Linking.openURL('https://github.com/GenesisHenriques')}
      >
        <Text>ENTRAR</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  imputs: {
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
