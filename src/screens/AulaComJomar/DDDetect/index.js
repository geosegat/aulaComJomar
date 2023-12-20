import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, TextInput} from 'react-native';
import AppText from '../../../components/AppText';

const DDDetect = () => {
  const [inputValue, setInputValue] = useState('');

  const numericButtonsLayout = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['.', 0, ','],
  ];

  const renderNumericButton = number => (
    <TouchableOpacity
      key={number}
      style={styles.containerNumeric}
      onPress={() => handleNumericPress(number)}>
      <AppText variant="bold" color="#547789" size="super">
        {number}
      </AppText>
    </TouchableOpacity>
  );

  const handleNumericPress = number => {
    if (inputValue.length < 2) {
      setInputValue(prevValue => prevValue + number.toString());
    }
  };

  const handleDeletePress = () => {
    setInputValue(prevValue => prevValue.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={inputValue}
        placeholder="Digite um número"
        placeholderTextColor="gray"
        keyboardType="numeric"
        style={styles.input}
      />
      {numericButtonsLayout.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.containerButtons}>
          {row.map(renderNumericButton)}
        </View>
      ))}
      <TouchableOpacity
        style={styles.containerNumeric}
        onPress={handleDeletePress}>
        <AppText variant="bold" color="#547789" size="super">
          {'<'}
        </AppText>
      </TouchableOpacity>
    </View>
  );
};

export default DDDetect;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', backgroundColor: '#2A2A2B'},
  input: {
    color: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 18,
    padding: 15,
    borderColor: '#547789',
    marginTop: 20,
    width: 200,
    alignSelf: 'center',
  },
  containerNumeric: {
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerButtons: {flexDirection: 'row', justifyContent: 'center'},
});
