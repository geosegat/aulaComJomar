import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const Button = ({label, color, textColor, variant = 'full'}) => {
  const buttonStyle = [styles.botao, {backgroundColor: color}];
  const textStyle = [styles.fontText, {color: textColor ?? '#fff'}];
  const [state, setState] = useState(false);
  return (
    <TouchableOpacity
      style={[buttonStyle, variant === 'round' && styles.botao2]}>
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
  botao2: {margin: 15, borderRadius: 10},
});
