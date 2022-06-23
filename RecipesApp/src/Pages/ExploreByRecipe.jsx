import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableHighlight, Image } from "react-native";

import { fetchByIngredients, fetchRecipeById } from '../Api';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const mockDataFood = [
  {
    "idMeal": "52788",
    "strMeal": "Christmas Pudding Flapjack",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/vvusxs1483907034.jpg",
  },
  {
    "idMeal": "52989",
    "strMeal": "Christmas Pudding Trifle",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/r33cud1576791081.jpg",
  },
  {
    "idMeal": "53037",
    "strMeal": "Coddled pork with cider",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/7vpsfp1608588991.jpg",
  },
  {
    "idMeal": "52998",
    "strMeal": "Corned Beef and Cabbage",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/xb97a81583266727.jpg",
  },
  {
    "idMeal": "52999",
    "strMeal": "Crispy Sausages and Greens",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/st1ifa1583267248.jpg",
  },
  {
    "idMeal": "53058",
    "strMeal": "Croatian Bean Stew",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/tnwy8m1628770384.jpg",
  },
  {
    "idMeal": "52907",
    "strMeal": "Duck Confit",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/wvpvsu1511786158.jpg",
  },
  {
    "idMeal": "52955",
    "strMeal": "Egg Drop Soup",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/1529446137.jpg",
  },
  {
    "idMeal": "52895",
    "strMeal": "English Breakfast",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/utxryw1511721587.jpg",
  },
  {
    "idMeal": "52791",
    "strMeal": "Eton Mess",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/uuxwvq1483907861.jpg",
  },
  {
    "idMeal": "52919",
    "strMeal": "Fennel Dauphinoise",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/ytttsv1511798734.jpg",
  },
  {
    "idMeal": "53030",
    "strMeal": "Feteer Meshaltet",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/9f4z6v1598734293.jpg",
  },
  {
    "idMeal": "52835",
    "strMeal": "Fettucine alfredo",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/uquqtu1511178042.jpg",
  },
  {
    "idMeal": "52815",
    "strMeal": "French Lentils With Garlic and Thyme",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/vwwspt1487394060.jpg",
  },
]

const mockDataDrink = [
  {
    "idDrink": "178314",
    "strDrink": "Gin Basil Smash",
    "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/jqh2141572807327.jpg",
  },
  {
    "idDrink": "11407",
    "strDrink": "Gin Cooler",
    "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/678xt11582481163.jpg",
  },
  {
    "idDrink": "11408",
    "strDrink": "Gin Daisy",
    "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/z6e22f1582581155.jpg",
  },
  {
    "idDrink": "11410",
    "strDrink": "Gin Fizz",
    "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/drtihp1606768397.jpg",
  },
  {
    "idDrink": "178366",
    "strDrink": "Gin Lemon",
    "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/yhzvk91643821739.jpg",
  },
  {
    "idDrink": "17230",
    "strDrink": "Gin Rickey",
    "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/s00d6f1504883945.jpg",
  },
  {
    "idDrink": "11415",
    "strDrink": "Gin Sling",
    "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/8cl9sm1582581761.jpg",
  },
  {
    "idDrink": "11416",
    "strDrink": "Gin Smash",
    "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/iprva61606768774.jpg",
  },
  {
    "idDrink": "11417",
    "strDrink": "Gin Sour",
    "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/noxp7e1606769224.jpg",
  },
  {
    "idDrink": "11418",
    "strDrink": "Gin Squirt",
    "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/xrbhz61504883702.jpg",
  },
  {
    "idDrink": "11419",
    "strDrink": "Gin Swizzle",
    "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/sybce31504884026.jpg",
  },
  {
    "idDrink": "11420",
    "strDrink": "Gin Toddy",
    "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/jxstwf1582582101.jpg",
  },
  {
    "idDrink": "178365",
    "strDrink": "Gin Tonic",
    "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/qcgz0t1643821443.jpg",
  },
  {
    "idDrink": "11433",
    "strDrink": "Grass Skirt",
    "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/qyvprp1473891585.jpg",
  },
]


export default function ExploreByRecipe({ route, navigation }) {
  const type = route.params.type;
  const by = route.params.by;

  const mock = type === 'food' ? mockDataFood : mockDataDrink;

  const [search, setSearch] = useState('');
  const [ searchedRecipes, setSearchedRecipes] = useState([]);

  const [ fontsLoaded ] = useFonts({
    "corva": require('../../assets/fonts/Mt-corva.ttf'),
  });

  if(!fontsLoaded) {
    <AppLoading />
  }

  useEffect(() => {
    if (type === 'food') {
      if (by === 'ingredientes') {
        fetchByIngredients(type, search)
          .then((response => {
            setSearchedRecipes(response.meals);
          }))
          .catch((err) => console.log(err))
          .finally(() => setLoading(false))
      } else if (by === 'placeOfOrigin') {
        console.log('a');
      } else { // surprise
        console.log('b');
      }
    }
    if (type === 'drink') {
      if (by === 'ingredientes') {
        fetchByIngredients(type, search)
          .then((response => {
            console.log(response.drinks);
            setSearchedRecipes(response.drinks);
          }))
          .catch((err) => console.log(err))
          .finally(() => setLoading(false))
      } else { // surprise
        console.log('a');
      }
    }
  }, [search]);

  // fetchRecipeById(item.idMeal)
  async function handlerFetchById(id) {
    console.log(id);
    const response = await fetchRecipeById(id);
    console.log(response);
  };

  return(
    <View style={styles.containerInput}>
      <TextInput
        style={styles.inputs}
        onChangeText={(e) => setSearch(e)}
        value={search}
      />
      <FlatList
        data={searchedRecipes === null ? mock : searchedRecipes}
        keyExtractor={(recipe) => type === 'food' ? recipe.idMeal : recipe.idDrink}
        renderItem={ // // idDrink  strDrink  strDrinkThumb // idMeal strMeal strMealThumb
          ({item}) => (
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              // navigation.navigate('Recipe', {data: {type: 'food', ...item} })
              onPress={() => handlerFetchById(type === 'food' ? item.idMeal : item.idDrink)}
              >
              <View style={styles.cardContainer}>
                <Image
                  style={styles.cardImage}
                  source={{
                    uri: type === 'food' ? item.strMealThumb : item.strDrinkThumb,
                  }}
                />
                <Text style={styles.CardTitle}>{type === 'food' ? item.strMeal : item.strDrink}</Text>
              </View>
            </TouchableHighlight>
          )
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  containerInput: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50
  },
  inputs: {
    color: 'gray',
    padding: 15,
    backgroundColor: 'white',
    width: 300,
    fontSize: 15,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 30,
  },
  cardContainer: {
    paddingTop: 20,
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
    width: 300,
    height: 250,
    marginTop: 20,
    borderRadius: 10
  },
  cardImage: {
    width: 270,
    height: 150,
    borderRadius: 10
  },
  CardTitle: {
    marginTop: 30,
    fontFamily: 'corva',
    fontSize: 20,
  },
});
