import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput  } from "react-native";

import { fetchByIngredients } from '../Api';

export default function ExploreByRecipe({ route, navigation }) {
  const [search, setSearch] = useState('');

  const type = route.params.type;
  const by = route.params.by;

  /*
  fetchFoodArea()
      .then((response => {
        dispatch(areaFoodArray(response));
      }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  */

  useEffect(() => {
    if (type === 'food') {
      if (by === 'ingredientes') {
        fetchByIngredients(type, search)
          .then((response => {
            console.log(response);
            // dispatch(areaFoodArray(response));
          }))
          .catch((err) => console.log(err))
          .finally(() => setLoading(false))
      } else if (by === 'placeOfOrigin') {
        console.log('a');
      } else { // surprise
        console.log('b');
      }
    } else {
      if (by === 'ingredientes') {
        fetchByIngredients(type, search)
      } else { // surprise
        console.log('a');
      }
    }
  }, [search]);

  if (type === 'food') {
    if (by === 'ingredientes') fetchByIngredients(type, search);
    if (by === 'placeOfOrigin') console.log(by);
    if (by === 'surprise') console.log(by);
  } else {
    if (by === 'ingredientes') fetchByIngredients(type, search);
    if (by === 'surprise') console.log(by);
  }

  return(
    <View style={styles.containerInput}>
      <TextInput
        style={styles.inputs}
        onChangeText={(e) => setSearch(e)}
        value={search}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  containerInput: {
    flex: 1,
    alignItems: 'center'
  },
  inputs: {
    color: 'gray',
    padding: 15,
    backgroundColor: 'white',
    width: 300,
    fontSize: 15,
    borderRadius: 10,
    marginTop: 30,
  }
});
