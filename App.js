import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TelaInicio from './src/screens/AulaComJomar/TelaInicio';
import Contador from './src/screens/AulaComJomar/Counter';
import TaskScreen from './src/screens/AulaComJomar/TaskScreen';

const Stack = createNativeStackNavigator();

const pressButon = () => {
  console.log('Botão pressionado!');
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerStyle: {backgroundColor: '#547789'}}}>
        <Stack.Screen name="Inicio" component={TelaInicio} />
        <Stack.Screen name="Contador" component={Contador} />
        <Stack.Screen name="TaskScreen" component={TaskScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
