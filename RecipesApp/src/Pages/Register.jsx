import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Linking,
  SafeAreaView,
  TouchableHighlight
} from 'react-native';

import FormRegister from '../Components/Login/FormRegister';

export default function Login() {
  const backgroundImageUrl = '.././img/fundoLogin.png'
  const urlLogo = '.././img/Logo.png'

  return(
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require(backgroundImageUrl)}
        resizeMode="stretch"
        style={styles.backgroundImage}
      >
        <View style={styles.githubView}>
        <TouchableHighlight
          style={styles.GithubButton}
          onPress={() => Linking.openURL('https://github.com/GenesisHenriques')}
        >
          <Text>GitHub</Text>
        </TouchableHighlight>
        </View>
        <Image
          style={styles.logo}
          source={
            require(urlLogo)
          }
        />
        <View><FormRegister /></View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  githubView: {
    paddingLeft: 20,
    width: '100%',
    alignItems: 'flex-start',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: 'center',
    width: "100%"
  },
  logo: {
    width:250,
    resizeMode: 'contain',
  },
  GithubButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10
  }
});