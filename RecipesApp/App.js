import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

import Login from './src/Pages/Login';
import Register from './src/Pages/Register';
import Home from './src/Pages/Home';
import Recipe from './src/Pages/Recipe';
import ExploreByRecipe from './src/Pages/ExploreByRecipe';

import { Provider } from 'react-redux';
import store from './src/ReduxToolkit/store';
import User from './src/Pages/User';


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
        <Stack.Navigator initialRouteName='Login'>
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
              headerTintColor: 'black',
              headerTransparent: true,
            }}
          />

          <Stack.Screen
            name='exploreByRecipe'
            component={ExploreByRecipe}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: 'red'
              },
              headerTintColor: 'black',
              headerTransparent: true,
            }}
          />

          <Stack.Screen
            name='User'
            component={User}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: 'red'
              },
              headerTintColor: 'black',
              headerTransparent: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
