import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Switch, ScrollView, StatusBar } from 'react-native';
import { ActivityIndicator } from 'react-native-web';

export default function Testando() {
  // React navigation
  // https://reactnavigation.org/
  const [carregando, setCarregando] = useState(true);
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('cfbcursos.com.br/filmes.json')
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err))
      .finally(() => setCarregando(false))
  }, []);

  return(
    <View style={styles.container}>
      <Text>Oii</Text>
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
