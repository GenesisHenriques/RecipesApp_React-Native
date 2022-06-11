import React, { useCallback, useState } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { getIngredients } from '../../Utils/getIngredients';
import YoutubeIframe from 'react-native-youtube-iframe';

export default function InfoRecipe({ data }) {
  const [playing, setPlaying] = useState(false);
  const ingredients = getIngredients(data);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  function getIdVideo(url) {
    return url.split("=")[1];
  }


  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>{data.strMeal}</Text>
        <View>
          <Text style={styles.title}>Ingredientes</Text>
          {
            ingredients.map((value) => <Text style={{ paddingLeft: 30 }}>{value}</Text>)
          }
        </View>
        <View>
          <Text style={styles.title}>Preparo</Text>
          <Text style={styles.text}>{data.strInstructions}</Text>
        </View>
        <Text style={styles.title}>──────────────</Text>
        <View style={styles.centralize}>
          <YoutubeIframe
            width={280}
            height={300}
            play={playing}
            videoId={getIdVideo(data.strYoutube)}
            onChangeState={onStateChange}
          />
        </View>
      </ScrollView>
    </View>
  )
}

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
    fontSize: 20,
    textAlign: 'center',
    padding: 20
  },
  text: {
    paddingLeft: 30,
    paddingRight: 30
  },
  video: {
    width: 100,
    height: 100
  },
});
