import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  ActivityIndicator,
  FlatList,
  ImageBackground,
  TouchableHighlight
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { fetchDrinks } from '../../Api';
import { drinkArray } from '../../ReduxToolkit/slices/selections';

// importes para fontes.ttf
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const backgroundImageUrl = '../../img/backgroundDrink.png';

export default function Drinks({ navigation }) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.selections.drinkArray);

  const [ fontsLoaded ] = useFonts({
    "corva": require('../../../assets/fonts/Mt-corva.ttf'),
    "Candara": require('../../../assets/fonts/Candara.ttf'),
  });

  if(!fontsLoaded) {
    <AppLoading />
  }

  useEffect(async () => {
    fetchDrinks()
      .then((response => {
        dispatch(drinkArray(response));
        setLoading(false);
      }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, []);

  return(
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require(backgroundImageUrl)}
        resizeMode="stretch"
        style={styles.backgroundImage}
      >
        {
          loading ? <ActivityIndicator size="large" color="#00ff00"/> : (
            <View // TouchableHighlight
              style={styles.drinksContainer}
              onPress={() => console.log("Componente individual em construção")}
            >
              <FlatList
                data={recipes}
                keyExtractor={(recipe) => recipe.idDrink}
                renderItem={
                  ({item}) => (
                    <TouchableHighlight
                      activeOpacity={0.6}
                      underlayColor="#DDDDDD"
                      onPress={() => navigation.navigate('Recipe', {data: {type: 'drink', ...item} })}
                    >
                      <View style={styles.cardContainer}>
                        <Image
                          style={styles.cardImage}
                          source={{
                            uri: item.strDrinkThumb,
                          }}
                        />
                        <View style={styles.infoPeople}>
                          <Image
                            style={styles.perfilImage}
                            source={{
                              uri: 'https://www.psicologo.com.br/wp-content/uploads/sou-uma-pessoa-boa-ou-nao-1024x538.jpg',
                            }}
                          />
                          <Text style={styles.employeeName}>Genesis</Text>
                        </View>
                        <Text style={styles.CardTitle}>{item.strDrink}</Text>
                        <Text>────────────────────</Text>
                        <View style={styles.interactions}>
                          <Icon name="heart-outline" size={25} color="black" />
                          <Text style={styles.text}></Text>
                          <Icon name="share-social-sharp" size={25} color="black" />
                        </View>
                      </View>
                    </TouchableHighlight>
                  )
                }
              />
            </View>
          )
        }
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drinksContainer: {
    marginTop: 100,
    alignItems: 'center'
  },
  cardContainer: {
    paddingTop: 20,
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
    width: 300,
    height: 300,
    marginTop: 20,
    borderRadius: 10
  },
  cardImage: {
    width: 270,
    height: 150,
  },
  perfilImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 20
  },
  infoPeople: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: -130,
  },
  CardTitle: {
    fontFamily: 'corva',
    fontSize: 30,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: 'center',
    width: "100%"
  },
  interactions: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 20
  },
  interactionsImg: {
    width: 30,
    height: 30,
  },
  employeeName: {
    fontFamily: 'Candara',
  }
});
