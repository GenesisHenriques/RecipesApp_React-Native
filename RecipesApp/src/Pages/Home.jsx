import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native';

import Foods from '.././Components/Home/Foods';
import Drinks from '.././Components/Home/Drinks';
import ToExplore from '../Components/Home/ToExplore';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();

export default function Home({ navigation }) {
  return(
    <Tabs.Navigator>
        <Tabs.Screen
          name='Foods'
          component={Foods}
          options = {{
            headerRight:() => (<Text>Oiiiiiiii</Text>)
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