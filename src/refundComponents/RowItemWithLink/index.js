import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AppText from '../../components/AppText';
import SvgSeta from './../../../svgs/seta-esquerda.svg';

const RowItemWithLink = ({
  leftLabel,
  rightLabel,
  onPressSetaIr,
  rightLabelColor,
  style,
}) => {
  return (
    <View style={[styles.containerCard, style]}>
      <View style={styles.containerFlex}>
        <AppText>{leftLabel ?? 'Status atual'}</AppText>
      </View>
      <TouchableOpacity onPress={onPressSetaIr} style={styles.containerButton}>
        <AppText color="#68B828">{rightLabel ?? 'Aprovado'}</AppText>

        <SvgSeta
          width={12}
          height={12}
          color={'#68B828'}
          style={[styles.containerSetaIr, rightLabelColor]}
        />
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
    borderTopWidth: 1,
    borderColor: '#DDD',
    borderBottomWidth: 1,
  },
  containerFlex: {flex: 1},
  containerButton: {flexDirection: 'row', alignItems: 'center'},
  containerSetaIr: {
    marginLeft: 5,
    transform: [{rotateZ: '180deg'}],
  },
});
