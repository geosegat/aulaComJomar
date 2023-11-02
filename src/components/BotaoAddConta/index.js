import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const BotaoAddConta = ({label}) => {
  return (
    <TouchableOpacity style={styles.containerButton}>
      <Text style={styles.fontLabel}>{label ?? '+ ADICIONAR NOVA CONTA'}</Text>
    </TouchableOpacity>
  );
};

export default BotaoAddConta;

const styles = StyleSheet.create({
  containerButton: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: 'dashed',
    borderColor: '#09498F',
    alignItems: 'center',
  },
  fontLabel: {color: '#09498F', fontWeight: '500'},
});
