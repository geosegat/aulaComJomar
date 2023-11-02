import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CardDados from './src/components/CardCadastrais/index';
import CardBorder from './src/components/CardWithBorder/index';
import CardCadastrais from './src/components/CardCadastrais/index';

const App = () => {
  return (
    <View>
      <CardCadastrais />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
