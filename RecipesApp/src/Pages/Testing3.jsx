import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Switch, ScrollView, StatusBar } from 'react-native';

export default function Testando() {
  // React navigation
  // https://reactnavigation.org/

  return(
    <View style={styles.container}>
      <StatusBar
        // https://reactnative.dev/docs/statusbar
        backgroundColor='red'
        barStyle='dark-content'
        hidden={false}
        animated={true}
        networkActivityIndicatorVisible={false}
        translucent={true}
      />
      <Text>Oooii</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
