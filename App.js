import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InitialScreen from './src/Screens/InitialScreen';

const Stack = createNativeStackNavigator();

const pressButon = () => {
  console.log('');
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: 'gray'}}}>
        <Stack.Screen name="InitialScreen" component={InitialScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
