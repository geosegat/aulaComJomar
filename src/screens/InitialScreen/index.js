import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ButtonStyle from '../../components/ButtonStyle';

const InitialScreen = () => {
  return (
    <View style={styles.container}>
      <ButtonStyle
        colorButtonStyle={{backgroundColor: 'gray'}}
        label={'Login'}
      />
      <ButtonStyle
        colorButtonStyle={{backgroundColor: 'gray'}}
        label={'Register'}
      />
    </View>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
  container: {padding: 15},
});
