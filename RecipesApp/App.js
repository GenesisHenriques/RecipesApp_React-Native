import React, {useState} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

const Stack = createStackNavigator();

import Login from './src/Pages/Login';
import Register from './src/Pages/Register';
import Home from './src/Pages/Home';
import Recipe from './src/Pages/Recipe';

import Testando from './src/Pages/Testing';
import Testando2 from './src/Pages/Testing2';
import Testando3 from './src/Pages/Testing3';

import MyContext from './src/Components/MyContext';
import { Provider } from 'react-redux';
import store from './src/ReduxToolkit/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          // https://reactnative.dev/docs/statusbar
          backgroundColor='#000'
          barStyle='light-content'
          animated={true}
        />
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
            name='Login'
            component={Login}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#000'
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold'
              },
              headerTransparent: true,
            }}
          />

          <Stack.Screen
            name='Register'
            component={Register}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#000'
              },
              headerTintColor: 'white',
              headerTransparent: true,
            }}
          />

          <Stack.Screen
            name='Home'
            component={Home}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#000'
              },
              headerTintColor: 'white',
              headerTransparent: true,
            }}
          />

          <Stack.Screen
            name='Recipe'
            component={Recipe}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#000'
              },
              headerTintColor: 'white',
              headerTransparent: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
