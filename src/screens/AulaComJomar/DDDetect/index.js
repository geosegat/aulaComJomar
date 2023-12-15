import {
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AppText from '../../../components/AppText';

const DDDetect = () => {
  const numericButtonsLayout = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['.', 0, ','],
  ];
  const numericButtonsLayout2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['.', 0, ','],
  ];

  const renderNumericButton = number => (
    <TouchableOpacity key={number} style={styles.containerNumeric}>
      <AppText variant="bold" color="#547789" size="super">
        {number}
      </AppText>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <TextInput></TextInput>
      {numericButtonsLayout.map((row, index) => (
        <View key={index} style={styles.containerButtons}>
          {row.map(renderNumericButton)}
        </View>
      ))}
    </View>
  );
};

export default DDDetect;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', backgroundColor: '#2A2A2B'},
  containerNumeric: {
    marginHorizontal: 20,
    margin: 1,
    borderRadius: 12,
  },
  containerButtons: {flexDirection: 'row', justifyContent: 'center'},
});
