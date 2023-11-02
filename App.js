import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BlueCard from './src/components/BlueCard';
import AppText from './src/components/AppText';
import Navbar from './src/components/Navbar';

const App = () => {
  return (
    <View>
      <Navbar />
      <BlueCard></BlueCard>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
