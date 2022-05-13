import React, {useState} from 'react'
import { View, Button, TextInput, StyleSheet } from "react-native"

// https://reactnative.dev/docs/textinput - textinput

export default function FormLogin() {
  const [imputLogin, setImputLogin] = useState(null);

  return(
    <View>
      <TextInput
        placeholder='usuario@gmail.com'
        style={styles.imputs}
        value={imputLogin}
        onChangeText={(e) => setImputLogin(e)}
        multiline={false}
      />
      <TextInput
        placeholder='********'
        style={styles.imputs}
        value={imputLogin}
        onChangeText={(e) => setImputLogin(e)}
        multiline={false}
      />
      <View style={styles.viewButtons}>
      <Button
          style={styles.buttons}
          onPress={() => Linking.openURL('https://github.com/GenesisHenriques')}
          title={'ENTRAR'}
      />
      <Button
          style={styles.buttons}
          onPress={() => Linking.openURL('https://github.com/GenesisHenriques')}
          title={'CADASTRAR'}
      />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imputs: {
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    width: 250,
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    margin: 10,
  },
  viewButtons: {
    backgroundColor: 'red',
  },
  buttons: {
    width: 10,
  }
});
