import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import SvgSeta from '../../../svgs/seta-esquerda.svg';

const CardCadastrais = () => {
  return (
    <View style={styles.containerCard}>
      <View style={styles.containerFlex1}></View>
      <TouchableOpacity style={styles.containerSetaIr}>
        <SvgSeta color="#09498F" width={14} height={14} />
      </TouchableOpacity>
    </View>
  );
};

export default CardCadastrais;

const styles = StyleSheet.create({
  containerCard: {
    backgroundColor: '#edf0f6',
    padding: 15,
    borderRadius: 5,
    elevation: 3,
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerFlex1: {flex: 1},
  containerSetaIr: {
    transform: [{rotateZ: '180deg'}],
    left: 10,
  },
});
