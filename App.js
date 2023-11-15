import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ExpenseCard from './src/refundComponents/ExpenseCard';
import BankAccountCard from './src/refundComponents/BankAccountCard';

const App = () => {
  function pressButton() {
    console.log('Botão pressioando!');
  }
  return (
    <View>
      <Text>Oi!</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
