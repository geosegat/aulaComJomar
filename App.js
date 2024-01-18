import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TelaInicio from './src/screens/AulaComJomar/TelaInicio';
import Contador from './src/screens/AulaComJomar/Counter';
import TaskScreen from './src/screens/AulaComJomar/TaskScreen';
import CurrencyConverter from './src/screens/AulaComJomar/CurrencyConverter';
import AuthenticationField from './src/screens/AulaComJomar/AuthenticationField';
import CepResultsScreen from './src/screens/AulaComJomar/CepResultsScreen';
import VirtualCardGenerator from './src/screens/AulaComJomar/VirtualCardGenerator';
import DDDetect from './src/screens/AulaComJomar/DDDetect';
import Quiz from './src/screens/AulaComJomar/Quiz';
import CalorieTrack from './src/screens/AulaComJomar/CalorieTrack';

const Stack = createNativeStackNavigator();

const pressButon = () => {
  console.log('');
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerStyle: {backgroundColor: '#547789'}}}>
        <Stack.Screen name="Inicio" component={TelaInicio} />
        <Stack.Screen name="Contador" component={Contador} />
        <Stack.Screen name="TaskScreen" component={TaskScreen}></Stack.Screen>
        <Stack.Screen
          name="CurrencyConverter"
          component={CurrencyConverter}></Stack.Screen>
        <Stack.Screen
          name="AuthenticationField"
          component={AuthenticationField}></Stack.Screen>
        <Stack.Screen
          name="CepResultsScreen"
          component={CepResultsScreen}></Stack.Screen>
        <Stack.Screen
          name="VirtualCardGenerator"
          component={VirtualCardGenerator}></Stack.Screen>
        <Stack.Screen name="DDDetect" component={DDDetect}></Stack.Screen>
        <Stack.Screen name="Quiz" component={Quiz}></Stack.Screen>
        <Stack.Screen
          name="CalorieTrack"
          component={CalorieTrack}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
