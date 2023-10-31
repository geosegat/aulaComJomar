import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import Button from './src/components/Button';
import Navbar from './src/components/Navbar';
import CardPrestador from './src/components/CardPrestadorIndicados';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Navbar label={'Rede Credenciada'}></Navbar>
      <View style={{flex: 1}}>
        <View>
          <CardPrestador color={'#68B828'} />
        </View>
        <CardPrestador />
        <CardPrestador />
      </View>
      <Button label={'BOTAO'} color={'#09498F'} />
    </View>
  );
};

export default App;
