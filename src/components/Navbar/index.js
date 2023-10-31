import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import SvgVoltar from './../../../svgs/seta-esquerda.svg';
import SvgAdd from './../../../svgs/botao-adicionar.svg';
const Navbar = ({label, botaoAdd = false, botaoVoltar}) => {
  return (
    <View style={styles.containerStatusBar}>
      {botaoVoltar ?? (
        <TouchableOpacity style={styles.botaoVoltar}>
          <SvgVoltar width={18} height={18} color={'#fff'} />
          <Text style={styles.fontVoltar}>Voltar</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.fontHeaderBar}> {label ?? 'Nada ainda'}</Text>
      {botaoAdd && (
        <TouchableOpacity style={styles.BotaoAdd}>
          <SvgAdd width={25} height={25} color={'#fff'} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  containerStatusBar: {
    backgroundColor: '#09498F',
    alignItems: 'center',
    padding: 12,
  },
  botaoVoltar: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 12,
    left: 3,
  },
  BotaoAdd: {
    alignItems: 'center',
    position: 'absolute',
    top: 12,
    right: 11,
  },
  fontHeaderBar: {fontSize: 17, fontWeight: '500', color: '#fff'},
  fontVoltar: {fontSize: 17, color: '#fff', marginLeft: 3},
});
