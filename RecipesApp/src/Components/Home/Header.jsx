import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight
} from 'react-native';

const perfilUrl = '../../img/iconPerfil.png';
const searchUrl = '../../img/iconSearch.png';

export default function Header({ navigation }) {
  return (
    <View style={styles.container}>
      <Icon name="" size={30} color="white" />
      <Text style={styles.text}></Text>
      <TouchableHighlight
        activeOpacity={0.3}
        underlayColor="none"
        onPress={() => navigation.navigate('User', {})}
      >
        <Icon name="person-outline" size={30} color="white" />
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    color: '#333',
    letterSpacing: 1
  }
});