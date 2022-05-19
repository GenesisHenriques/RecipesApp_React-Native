import React, {useState} from 'react'
import { View, Text, StyleSheet } from "react-native"

export default function ToExplore({ navigation }) {
  return(
    <View>
      <Text>ToExplore</Text>
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
  }
});
