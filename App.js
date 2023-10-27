import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SvgVoltar from './svgs/seta-esquerda.svg';

const App = () => {
  return (
    <View style={{backgroundColor: 'pink'}}>
      <SvgVoltar width={18} height={18} color="white"></SvgVoltar>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
