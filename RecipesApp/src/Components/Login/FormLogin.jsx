import React, {useState} from 'react'
import { View, Button, Text,  TextInput, StyleSheet, TouchableHighlight } from "react-native"

// https://reactnative.dev/docs/textinput - textinput

export default function FormLogin({ navigation }) {
  const [inputLogin, setInputLogin] = useState(null);
  const [inputSenha, setInputSenha] = useState(null);

  return(
    <View>
      <TextInput
        placeholder='usuario@gmail.com'
        style={styles.inputs}
        value={inputLogin}
        onChangeText={(e) => setInputLogin(e)}
        multiline={false}
        keyboardType="email-address"
      />
      <TextInput
        placeholder='********'
        style={styles.inputs}
        value={inputSenha}
        onChangeText={(e) => setInputSenha(e)}
        multiline={false}
        secureTextEntry={true}
      />
      <View style={styles.viewButtons}>
        <TouchableHighlight
          style={styles.buttons}
          onPress={() => Linking.openURL('https://github.com/GenesisHenriques')}
        >
          <Text>ENTRAR</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.buttons}
          onPress={() => navigation.navigate('Register', { name: "Genesis" })}
        >
          <Text>CADASTRAR</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputs: {
    color: 'gray',
    padding: 15,
    backgroundColor: 'white',
    width: 300,
    fontSize: 15,
    borderBottomWidth: 1,
    borderRadius: 10,
    margin: 10,
  },
  viewButtons: {
    flexDirection: 'row',
    justifyContent:'center'
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
