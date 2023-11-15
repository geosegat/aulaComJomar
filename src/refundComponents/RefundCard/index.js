import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import SvgEdit from './../../../svgs/icon-editar.svg';
import SvgDelete from './../../../svgs/icon-close.svg';

import App from '../../../App';
import AppText from '../../components/AppText';

const RefundCard = ({
  protocol,
  status,
  requestDate,
  requestValue,
  releasedValue,
  onPressEditIcon,
  onPressDeleteIcon,
  style,
}) => {
  return (
    <View style={[styles.containerCard, style]}>
      <View style={styles.containerProtocoleButton}>
        <View style={styles.containerProtocolFlex}>
          <AppText size="large" variant="semiBold">
            {protocol ?? '123456789'}
          </AppText>
        </View>
        <TouchableOpacity onPress={onPressEditIcon}>
          <SvgEdit />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressDeleteIcon}
          style={styles.containerDelete}>
          <SvgDelete />
        </TouchableOpacity>
      </View>
      <View style={styles.containerFlexMargin}>
        <View style={styles.containerFlexReqStats}>
          <AppText size="small" color="#555">
            Situação
          </AppText>
          <AppText color="#888" variant="semiBold">
            {status ?? 'Rascunho'}
          </AppText>
        </View>
        <View style={styles.containerFlexReqStats}>
          <AppText size="small" color="#555">
            Data solicitação
          </AppText>
          <AppText>{requestDate ?? '20/10/2020'}</AppText>
        </View>
      </View>
      <View style={styles.containerFlexMargin}>
        <View style={styles.containerFlexReqStats}>
          <AppText size="small" color="#555">
            Valor solicitado
          </AppText>
          <AppText>{requestValue ?? 'R$ 450,00'}</AppText>
        </View>
        <View style={styles.containerFlexReqStats}>
          <AppText size="small" color="#555">
            Valor liberado
          </AppText>
          <AppText>{releasedValue ?? '-'}</AppText>
        </View>
      </View>
    </View>
  );
};

export default RefundCard;

const styles = StyleSheet.create({
  containerCard: {
    padding: 15,
    borderLeftWidth: 7,
    borderColor: '#888',
    borderRadius: 5,
    backgroundColor: '#fff',
    elevation: 1,
  },
  containerProtocoleButton: {flexDirection: 'row'},
  containerProtocolFlex: {flex: 1},
  containerDelete: {marginLeft: 12},
  containerFlexMargin: {flexDirection: 'row', marginTop: 10},
  containerFlexReqStats: {flex: 1},
});
