import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({label, color, textColor}) => {
  const buttonStyle = [styles.botao, {backgroundColor: color}];
  const textStyle = [styles.fontText, {color: textColor ?? '#fff'}];
  return (
    <TouchableOpacity style={buttonStyle}>
      <Text style={textStyle}> {label ?? 'BOTÃO'}</Text>
    </TouchableOpacity>
  );
};

export default Button;
const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#09498F',
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontText: {fontSize: 16, fontWeight: '700'},
});
