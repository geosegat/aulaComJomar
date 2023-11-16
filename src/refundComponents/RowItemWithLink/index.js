import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AppText from '../../components/AppText';
import SvgSeta from './../../../svgs/seta-esquerda.svg';

const RowItemWithLink = ({
  leftLabel,
  rightLabel,
  onPressSetaIr,
  rightLabelColor,
}) => {
  return (
    <View style={styles.containerCard}>
      <View style={styles.containerFlex}>
        <AppText>{leftLabel ?? 'Status atual'}</AppText>
      </View>
      <AppText color="#68B828">{rightLabel ?? 'Aprovado'}</AppText>
      <TouchableOpacity onPress={onPressSetaIr} style={styles.containerSetaIr}>
        <SvgSeta width={12} height={12} color={'#68B828'} />
      </TouchableOpacity>
    </View>
  );
};

export default RowItemWithLink;

const styles = StyleSheet.create({
  containerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    elevation: 1,
  },
  containerFlex: {flex: 1},
  containerSetaIr: {marginLeft: 5, transform: [{rotateZ: '180deg'}]},
});
