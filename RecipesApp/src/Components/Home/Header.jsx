import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Text,
  StyleSheet,
  View,
  Image
} from 'react-native';

const perfilUrl = '../../img/iconPerfil.png';
const searchUrl = '../../img/iconSearch.png';

export default function Header(props) {
  return (
    <View style={styles.container}>
      <Icon name="person-outline" size={30} color="white" />
      <Text style={styles.text}></Text>
      <Icon name="search-outline" size={30} color="white" />
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