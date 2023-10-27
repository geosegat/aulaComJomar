import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <Text>aa</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'purple'},
});
