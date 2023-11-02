import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import SvgVoltar from './../../../svgs/seta-esquerda.svg';
import SvgAdd from './../../../svgs/botao-adicionar.svg';
const Navbar = ({label, labelSub, botaoAdd = false, botaoVoltar = true}) => {
  return (
    <View style={styles.containerStatusBar}>
      <View style={{flex: 0}}>
        {botaoVoltar && (
          <TouchableOpacity style={styles.botaoVoltar}>
            <SvgVoltar width={18} height={18} color={'#fff'} />
            <Text style={styles.fontVoltar}>Voltar</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={{alignItems: 'center', flex: 1}}>
        <Text style={styles.fontHeaderBar}> {label ?? 'Nada ainda'}</Text>
        {labelSub && (
          <Text style={styles.fontSubHeaderBar}>
            {labelSub ?? 'Nada ainda'}
          </Text>
        )}
      </View>

      <View style={{position: 'absolute', top: 12, right: 5}}>
        {botaoAdd && (
          <TouchableOpacity style={styles.BotaoAdd}>
            <SvgAdd width={25} height={25} color={'#fff'} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  containerStatusBar: {
    backgroundColor: '#09498F',
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoVoltar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  BotaoAdd: {
    alignItems: 'center',
  },
  fontHeaderBar: {fontSize: 17, fontWeight: '500', color: '#fff'},
  fontSubHeaderBar: {fontSize: 12, color: '#fff'},

  fontVoltar: {fontSize: 17, color: '#fff', marginLeft: 3},
});
