import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableHighlight, ImageBackground } from "react-native";

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function ToExplore({ navigation }) {
  const [visibleFood, setControllerFood] = useState(false);
  const [visibleDrink, setControllerDrink] = useState(false);

  const backgroundImageUrl = '../../img/backgroundExplore.png';

  const [ fontsLoaded ] = useFonts({
    "Candara": require('../../../assets/fonts/Candara.ttf'),
  });

  if(!fontsLoaded) {
    <AppLoading />
  }

  return(
    <ImageBackground
      source={require(backgroundImageUrl)}
      resizeMode="stretch"
      style={styles.backgroundImage}
    >
      <View style={styles.componentButtons}>
        <TouchableHighlight
          activeOpacity={0.3}
          underlayColor="none"
          onPress={() => setControllerFood(!visibleFood)}
        >
          <Text style={styles.buttonExplore}>Explorar Comidas</Text>
        </TouchableHighlight>
        {
          visibleFood ?
          (
            <View>
              <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="none"
                onPress={() => navigation.navigate('exploreByRecipe', {
                  type: 'food',
                  by: 'ingredientes'
                })}
              >
                <Text style={styles.subButtonExplore}>Por ingrediente</Text>
              </TouchableHighlight>
              <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="none"
                onPress={() => navigation.navigate('exploreByRecipe', {
                  type: 'food',
                  by: 'placeOfOrigin'
                })}
              >
                <Text style={styles.subButtonExplore}>Por local de origem</Text>
              </TouchableHighlight>
              <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="none"
                onPress={() => navigation.navigate('exploreByRecipe', {
                  type: 'food',
                  by: 'surprise'
                })}
              >
                <Text style={styles.subButtonExplore}>Me surpreenda</Text>
              </TouchableHighlight>
            </View>
          )
          : null
        }
        <TouchableHighlight
          activeOpacity={0.3}
          underlayColor="none"
          onPress={() => setControllerDrink(!visibleDrink)}
        >
          <Text style={styles.buttonExplore}>Explorar Bebidas</Text>
        </TouchableHighlight>
        {
          visibleDrink ?
          (
            <View>
              <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="none"
                onPress={() => navigation.navigate('exploreByRecipe', {
                  type: 'drink',
                  by: 'ingredientes'
                })}
              >
                <Text style={styles.subButtonExplore}>Por ingrediente</Text>
              </TouchableHighlight>
              <TouchableHighlight
                activeOpacity={0.3}
                underlayColor="none"
                onPress={() => navigation.navigate('exploreByRecipe', {
                  type: 'drink',
                  by: 'surprise'
                })}
              >
                <Text style={styles.subButtonExplore}>Me surpreenda</Text>
              </TouchableHighlight>
            </View>
          )
          : null
        }
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: 'center',
    width: "100%",
  },
  componentButtons: {
    flex: 1,
    margin: 100,
    width: '100%',
    alignItems: 'center'
  },
  buttonExplore: {
    backgroundColor: 'white',
    padding: 20,
    margin: 10,
    width: 280,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Candara'
  },
  subButtonExplore: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    width: 200,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Candara'
  },
});
