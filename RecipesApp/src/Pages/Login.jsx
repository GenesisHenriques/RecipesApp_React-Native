import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Linking, Button } from 'react-native';

export default function Login() {
  const backgroundImageUrl = '.././img/fundoLogin.png'
  const urlLogo = '.././img/Logo.png'

  return(
    <View style={styles.container}>
      <ImageBackground
        source={require(backgroundImageUrl)}
        resizeMode="stretch"
        style={styles.backgroundImage}
      >
        <View>
        <Button
          style={{color: 'White'}}
          onPress={() => Linking.openURL('https://github.com/GenesisHenriques')}
          title={'GitHub'}
        />
        </View>
        <Image
          style={styles.logo}
          source={
            require(urlLogo)
          }
        />
        <View><Text style={{color: 'white'}}>Form</Text></View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});