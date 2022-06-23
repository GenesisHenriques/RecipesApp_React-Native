import React from 'react';
import { Text, ImageBackground, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import InfoRecipe from '../Components/Recipe/InfoRecipe';

const Recipe = ({ route, navigation }) => {
  const data = route.params.data;
  console.log(data);

  return (
    <ImageBackground
      source={{
        uri: data.type === 'food' ? data.strMealThumb : data.strDrinkThumb
      }}
      style={styles.container}
    >
      <LinearGradient
        colors={['transparent', '#E4E4E4']}
        style={styles.background}
      />
      <InfoRecipe data={ data } />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E4E4E4',
    height: "50%",
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: "50%",
  },
});

export default Recipe;