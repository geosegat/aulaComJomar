import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({label}) => {
  console.log(label);
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'blue',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: '#fff', fontSize: 16}}>
        {label ?? 'valor padrao'}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
