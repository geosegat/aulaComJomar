import {StyleSheet, Text, View, Alert} from 'react-native';
import React from 'react';
import Screen64 from './src/screens/screen-64';
import Screen74 from './src/screens/screen-74';
import CardWithBorder from './src/components/CardWithBorder';

const App = () => {
  function fazTempo() {
    Alert.alert('coco');
  }
  return <CardWithBorder onPress={fazTempo} style={styles.cardMargin} />;
};

export default App;

const styles = StyleSheet.create({
  cardMargin: {margin: 15},
});
