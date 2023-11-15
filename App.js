import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RefundCard from './src/refundComponents/RefundCard';
import BankAccountCard from './src/refundComponents/BankAccountCard';

const App = () => {
  function pressEditIcon() {
    console.log('Botão de editar pressionado!');
  }

  function pressDeleteIcon() {
    console.log('Botão de fechar pressionado!');
  }
  return (
    <View style={{flex: 1, backgroundColor: '#F6F6F6', padding: 15}}>
      <View>
        <BankAccountCard></BankAccountCard>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
