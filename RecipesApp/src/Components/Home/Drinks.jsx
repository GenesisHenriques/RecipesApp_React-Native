// import React from 'react';
import React, {Component} from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

import Globais from '../Globais'; // Variaveis globais para componentes de clase -> modelo Java
import MyContext from '../MyContext';

export default class Drinks extends Component {
  idade = Globais.idade

  render(){
    return(
      <View>
        <Text>Drinks</Text>
        <Text>Drink</Text>
      </View>
    )
  }
}
