import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native';

export default function Home({ navigation }) {
  return(
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});