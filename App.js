import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TelaInicio from './src/screens/AulaComJomar/TelaInicio';
import Contador from './src/screens/AulaComJomar/Contador';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
