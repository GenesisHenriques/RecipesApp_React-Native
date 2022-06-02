import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

// import { createDrawerNavigator } from '@react-navigation/drawer';
import { fetchFoods } from '../../Api';
import { foodArray } from '../../ReduxToolkit/slices/selections';


// const Drawer = createDrawerNavigator();

export default function Foods({ navigation }) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.selections.foodArray)

  useEffect(async () => {
    fetchFoods()
      .then((response => {
        dispatch(foodArray(response));
        setLoading(false);
      }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, []);

  return (
    /*<Drawer.Navigator>
      <Drawer.Screen name="Drinks" component={Drinks} />
      <Drawer.Screen name="ToExplore" component={ToExplore} />
    </Drawer.Navigator>*/
    <View>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      {
        loading ? <ActivityIndicator size="large" color="#00ff00"/> : (
          <View // TouchableHighlight
            style={styles.foodsContainer}
            onPress={() => console.log("Componente individual em construção")}
          >
            <FlatList
              data={recipes}
              keyExtractor={(recipe) => recipe.idMeal}
              renderItem={
                ({item}) => (
                  <View style={styles.container}>
                    <Image
                      style={styles.cardImage}
                      source={{
                        uri: item.strMealThumb,
                      }}
                    />
                    <Text style={styles.CardTitle}>{item.strMeal}</Text>
                  </View>
                )
              }
            />
          </View>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  foodsContainer: {
    backgroundColor: '#E4E4E4',
    alignItems: 'center'
  },
  container: {
    paddingTop: 50,
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
    height: 120,
  },
  CardTitle: {
    backgroundColor: 'red'
  }
});
