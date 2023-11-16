import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

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
