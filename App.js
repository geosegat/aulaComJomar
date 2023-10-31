import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import Button from './src/components/Button';
import Navbar from './src/components/Navbar';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Navbar label={'Adicionar Despesas'} />
      <View style={{flex: 1}}></View>
      <Button label={'BOTAO'} color={'#09498F'} />
    </View>
  );
};

export default App;
