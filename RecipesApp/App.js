import React, {useState} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

const Stack = createStackNavigator();

import Login from './src/Pages/Login';
import Register from './src/Pages/Register';
import Home from './src/Pages/Home';

import Testando from './src/Pages/Testing';
import Testando2 from './src/Pages/Testing2';
import Testando3 from './src/Pages/Testing3';

import MyContext from './src/Components/MyContext';
import { Provider } from 'react-redux';
import store from './src/ReduxToolkit/store';

export default function App() {
  const [idade, setIdade] = useState(0);
  const [foods, setFoods] = useState([]);

  const contextValue = {
    idade,
    setIdade,
    foods,
    setFoods,
  };

  return (
    //<Testando3 />
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
              title: 'Login',
              headerStyle: {
                backgroundColor: '#000'
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold'
              },
            }}
          />

          <Stack.Screen
            name='Register'
            component={Register}
            options={{
              title: 'Register',
              headerStyle: {
                backgroundColor: '#000'
              },
              headerTintColor: 'white'
            }}
          />

          <Stack.Screen
            name='Home'
            component={Home}
            options={{
              title: 'Home',
              headerStyle: {
                backgroundColor: '#000'
              },
              headerTintColor: 'white'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
