import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import SvgSeta from '../../../svgs/seta-esquerda.svg';
import AppText from '../AppText';

const CardCadastrais = ({labelHeader, labelName, labelAg, labelCc}) => {
  return (
    <View style={styles.containerCard}>
      <View style={styles.containerFlex1}>
        <View style={{marginBottom: 2}}>
          <AppText variant="semiBold" color="#333">
            {labelHeader ?? 'Banco do Brasil SA'}
          </AppText>
        </View>
        <View style={{marginBottom: 2}}>
          <AppText size="small" color="#555">
            {labelName ?? 'Victor Hugo Prando da Silva'}
          </AppText>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <AppText size="small" color="#555">
              {labelAg ?? 'Ag.: 0070'}
            </AppText>
          </View>
          <View style={{flex: 3}}>
            <AppText size="small" color="#555">
              {labelCc ?? 'CC: 12099-0'}
            </AppText>
          </View>
        </View>
      </View>
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

    alignItems: 'center',
    flexDirection: 'row',
  },
  containerFlex1: {flex: 1},
  containerSetaIr: {
    transform: [{rotateZ: '180deg'}],
    left: 10,
  },
});
