import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
  Modal
} from 'react-native';

export default function Testando() {
  const [cont, setCont] = useState(0)

  function handlerButton(value) {
    console.log(value);
    setCont(cont + 1)
  }

  return(
    <View style={styles.container}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={cont % 2 == 0}
      >
        <View style={styles.modal}>
          <Text style={{color: 'white'}}>GENESISSSS</Text>
          <Button
          title='fechar'
          onPress={() => setCont(cont + 1)}
          />
        </View>
      </Modal>
      <TouchableHighlight
        style={styles.button}
        onPress={(e) => handlerButton(e.value)}
      >
        <Text style={styles.text}>Genesis</Text>
      </TouchableHighlight>
      <TouchableOpacity
        style={styles.button}
        onPress={(e) => handlerButton(e.value)}
      >
        <Text style={styles.text}>Genesis</Text>
      </TouchableOpacity>
      <TouchableWithoutFeedback
        style={styles.button}
        onPress={(e) => handlerButton(e.value)}
      >
        <Text style={styles.text}>Genesis</Text>
      </TouchableWithoutFeedback>
      <Text style={styles.text}>{cont}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ccc',
    padding: 10,
    margin: 10,
    borderRadius: 10
  },
  text: {
    color: '#000',
  },
  modal: {
    backgroundColor: '#000',
    margin: 20,
    padding: 20,
    borderRadius: 20,
    elevation: 10,
    alignItems: 'center'
  }
});
