import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EnterPage from './components/EnterPage';
import RegistrationPage from './components/RegistrationPage';

const App = () => {

  const Stack = createNativeStackNavigator();

  const MyStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Enter" component={EnterPage}/>
          <Stack.Screen name="Registration" component={RegistrationPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  return (
    <MyStack/>
  );
};

export default App;