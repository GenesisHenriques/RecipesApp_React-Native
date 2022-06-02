import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Entypo, Feather } from '@expo/vector-icons';
import {
  StyleSheet,
  View
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Foods from '.././Components/Home/Foods';
import Drinks from '.././Components/Home/Drinks';
import ToExplore from '../Components/Home/ToExplore';
import Header from '../Components/Home/Header';

const Tabs = createBottomTabNavigator();

const Home = () => {
  return(
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#B6D048',
        tabBarInactiveTintColor: 'black',
        labelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopColor: 'transparent',
          paddingTop: 5,
        }
      }}
    >
      <Tabs.Screen
        name='Comidas'
        component={Foods}
        options = {{
          headerTitle: () => <Header />,
          headerTransparent: true,
          tabBarLabel:"",
          tabBarIcon: ({ size, color }) => (
            <Icon name="restaurant-outline" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name='ToExplore'
        component={ToExplore}
        options = {{
          tabBarLabel:"",
          tabBarIcon: ({ size, color }) => (
            <View style={styles.iconArea}>
              <Icon name="ios-earth-outline" size={45} color={color} />
            </View>
          )
        }}
      />
      <Tabs.Screen
        name='Bebidas'
        component={Drinks}
        options = {{
          headerTitle: () => <Header />,
          headerTransparent: true,
          tabBarLabel:"",
          tabBarIcon: ({ size, color }) => (
            <Icon name="beer-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  )
}

const styles = StyleSheet.create({
  iconArea: {
    backgroundColor: '#B6D048',
    borderRadius: 50,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 45
  }
});

export default Home;
