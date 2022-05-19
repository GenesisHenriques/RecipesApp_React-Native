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

export default function App() {
  return (
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
            title: 'Login',
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
  );
}
