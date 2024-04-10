import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Button, Text } from 'react-native';
import HomeScreen from './components/Homescreen';
import ProfileScreen from './components/ProfileScreen';

const App = () => {

    const Stack = createNativeStackNavigator();

const MyStack = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Enter" component={HomeScreen}/>
        <Stack.Screen name="Registration" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

  return (
    <MyStack/>
  );
};

export default App;
