import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AppText from '../../components/AppText';
import SvgSeta from './../../../svgs/seta-esquerda.svg';
import SvgCheck from './../../../svgs/icon-check-green.svg';

const SelectDocumentCard = ({
  label,
  onPressSetaIr,
  isCheked = false,
  style,
}) => {
  return (
    <View style={[styles.containerCard, style]}>
      <View style={styles.containerTextFlex}>
        <AppText variant="semiBold">{label ?? 'Texto'} </AppText>
      </View>
      {isCheked && <SvgCheck />}
      <TouchableOpacity onPress={onPressSetaIr} style={styles.containerSetaIr}>
        <SvgSeta width={12} height={12} color={'#09498F'} />
      </TouchableOpacity>
    </View>
  );
};

export default SelectDocumentCard;

const styles = StyleSheet.create({
  containerCard: {
    flexDirection: 'row',
    backgroundColor: '#ecf0f7',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
  },
  containerTextFlex: {flex: 1},
  containerSetaIr: {marginLeft: 8, transform: [{rotateZ: '180deg'}]},
});
