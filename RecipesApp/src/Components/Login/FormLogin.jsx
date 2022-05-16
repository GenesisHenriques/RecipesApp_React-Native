import React, {useState} from 'react'
import { View, Button, Text,  TextInput, StyleSheet, TouchableHighlight } from "react-native"

// https://reactnative.dev/docs/textinput - textinput

export default function FormLogin() {
  const [imputLogin, setImputLogin] = useState(null);
  const [imputSenha, setImputSenha] = useState(null);

  return(
    <View>
      <TextInput
        placeholder='usuario@gmail.com'
        style={styles.imputs}
        value={imputLogin}
        onChangeText={(e) => setImputLogin(e)}
        multiline={false}
        keyboardType="email-address"
      />
      <TextInput
        placeholder='********'
        style={styles.imputs}
        value={imputSenha}
        onChangeText={(e) => setImputSenha(e)}
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
          onPress={() => Linking.openURL('https://github.com/GenesisHenriques')}
        >
          <Text>CADASTRAR</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
