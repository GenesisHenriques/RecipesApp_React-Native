import React, { useCallback, useState } from 'react';
import { Text, StyleSheet, View, ScrollView, Button, Modal } from 'react-native';
import { getIngredients } from '../../Utils/getIngredients';
import YoutubePlayer from 'react-native-youtube-iframe';

// importes para fontes.ttf
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function InfoRecipe({ data }) {
  const ingredients = getIngredients(data);
  const [playing, setPlaying] = useState(false);

  const [ fontsLoaded ] = useFonts({
    "corva": require('../../../assets/fonts/Mt-corva.ttf'),
    "Candara": require('../../../assets/fonts/Candara.ttf'),
  });

  if(!fontsLoaded) {
    <AppLoading />
  }

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);// strDrink strMeal

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>{data.type === 'food' ? data.strMeal : data.strDrink}</Text>
        <View>
          <Text style={styles.title}>Ingredients</Text>
          {
            ingredients.map((value, index) => <Text key={index} style={styles.ingredientsText}>{value}</Text>)
          }
        </View>
        <View>
          <Text style={styles.title}>Preparation</Text>
          <Text style={styles.text}>{data.strInstructions}</Text>
        </View>
        <Text style={styles.title}>──────────────</Text>
      </ScrollView>
    </View>
  )
}

/*
<View style={styles.centralize}>
  <YoutubePlayer
    width={280}
    height={300}
    play={playing}
    videoId={"iee2TATGMyI"} // getIdVideo(data.strYoutube)
    onChangeState={onStateChange}
  />
</View>
*/

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: "78%",
    height: "100%",
    marginTop: 200,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
  },
  title: {
    textAlign: 'center',
    padding: 20,
    fontFamily: 'corva',
    fontSize: 30,
  },
  text: {
    paddingLeft: 30,
    paddingRight: 30,
    fontFamily: 'Candara'
  },
  ingredientsText: {
    paddingLeft: 30,
    fontFamily: 'Candara'
  },
  video: {
    width: 100,
    height: 100
  },
});
