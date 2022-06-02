import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native';

import Foods from '.././Components/Home/Foods';
import Drinks from '.././Components/Home/Drinks';
import ToExplore from '../Components/Home/ToExplore';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { fetchFilteredItems } from '../Utils/Fetch';
import MyContext from '../Components/MyContext';

const Tabs = createBottomTabNavigator();

const Home = () => {
  return(
    <Tabs.Navigator>
      <Tabs.Screen
        name='Comidas'
        component={Foods}
        options = {{
          headerRight:() => (<Text>Pesquisar</Text>)
        }}
      />
      <Tabs.Screen
        name='ToExplore'
        component={ToExplore}
      />
      <Tabs.Screen
        name='Drinks'
        component={Drinks}
      />
    </Tabs.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Home;