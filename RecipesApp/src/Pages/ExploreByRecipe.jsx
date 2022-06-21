import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableHighlight  } from "react-native"

export default function ExploreByRecipe({ route, navigation }) {
  const type = route.params.type;
  const by = route.params.by;

  return(
    <View>
      <Text>{type}</Text>
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
