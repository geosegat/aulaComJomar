import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BlueCard from './src/components/BlueCard';
import AppText from './src/components/AppText';
import Navbar from './src/components/Navbar';
import Screen64 from './src/screens/screen-64';

const App = () => {
  return (
    <View>
      <Screen64 />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
