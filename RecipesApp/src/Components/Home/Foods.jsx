import React from 'react';
import {
  Text,
  View
} from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Drinks from './Drinks';
import ToExplore from './ToExplore';

const Drawer = createDrawerNavigator();

export default function Foods({ navigation }) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Drinks" component={Drinks} />
      <Drawer.Screen name="ToExplore" component={ToExplore} />
    </Drawer.Navigator>
  );
}
