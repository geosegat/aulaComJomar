import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const IconSelect = ({style}) => {
  return (
    <TouchableOpacity
      style={[styles.containerIconSelect, style]}></TouchableOpacity>
  );
};

export default IconSelect;

const styles = StyleSheet.create({
  containerIconSelect: {
    width: 20,
    height: 20,
    borderColor: '#CCCCCC',
    borderWidth: 2,
    borderRadius: 50,
  },
});
