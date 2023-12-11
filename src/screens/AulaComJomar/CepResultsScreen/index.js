import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import AppText from '../../../components/AppText';

const CepResultsScreen = () => {
  return (
    <View style={styles.container}>
      <AppText size="xxlarge" color="#fff">
        Digite um cep para encontrar o endereço
      </AppText>
      <TextInput
        placeholder="Digite o cep..."
        placeholderTextColor={'#fff'}
        keyboardType="numeric"></TextInput>
    </View>
  );
};

export default CepResultsScreen;

const styles = StyleSheet.create({
  container: {backgroundColor: '#2A2A2B', flex: 1, alignItems: 'center'},
});
