import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  TouchableHighlight,
  View
} from 'react-native';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function User({ navigation }) {
  const [ fontsLoaded ] = useFonts({
    "Candara": require('../../assets/fonts/Candara.ttf'),
  });

  if(!fontsLoaded) {
    <AppLoading />
  }

  return(
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.perfilImage}
        source={{
          uri: 'https://www.psicologo.com.br/wp-content/uploads/sou-uma-pessoa-boa-ou-nao-1024x538.jpg',
        }}
      />
      <View style={styles.containerText}>
        <Text style={styles.text}>Genesis</Text>
        <Text style={styles.text}>genesis123@gmail.com</Text>
      </View>
      <TouchableHighlight
        activeOpacity={0.3}
        underlayColor="none"
        onPress={() => navigation.navigate('Home', {})}
      >
        <Text
          style={styles.subButtonExplore}>Receitas Feitas</Text>
      </TouchableHighlight>

      <TouchableHighlight
        activeOpacity={0.3}
        underlayColor="none"
        onPress={() => navigation.navigate('Home', {})}
      >
        <Text
          style={styles.subButtonExplore}>Receitas Favoritas</Text>
      </TouchableHighlight>

      <TouchableHighlight
        activeOpacity={0.3}
        underlayColor="none"
        onPress={() => navigation.navigate('Home', {})}
      >
        <Text
          style={styles.subButtonExplore}>Editar</Text>
      </TouchableHighlight>

      <TouchableHighlight
        activeOpacity={0.3}
        underlayColor="none"
        onPress={() => navigation.navigate('Home', {})}
      >
        <Text
          style={styles.subButtonExplore}>Sair</Text>
      </TouchableHighlight>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerText: {
    paddingTop: 50,
    paddingBottom: 50,
  },
  text: {
    fontFamily: 'Candara',
    fontSize: 25,
  },
  subButtonExplore: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    width: 250,
    height: 60,
    borderRadius: 10,
    fontSize: 18,
    fontFamily: 'Candara',
    textAlign: 'center',
    paddingTop: 18
  },
  perfilImage: {
    width: 200,
    height: 200,
    borderRadius: 300,
    marginRight: 20,
  },
});