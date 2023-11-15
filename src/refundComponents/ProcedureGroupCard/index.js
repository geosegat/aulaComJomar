import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AppText from '../../components/AppText';
import SvgEdit from './../../../svgs/icon-editar.svg';
import SvgDelete from './../../../svgs/icon-close.svg';
import SvgSetaIr from './../../../svgs/seta-esquerda.svg';

const ProcedureGroupCard = ({
  procedureGroup,
  onPressEditIcon,
  onPressDeleteIcon,
  onPressAttachments,
  procedureDescription,
  requestDate,
  totalValue,
  attachments,
  quantity,
  style,
}) => {
  return (
    <View style={[styles.containerCard, style]}>
      <View style={styles.containerFlexRow}>
        <View style={styles.containerText}>
          <AppText size="small" color="#555">
            Grupo de procedimento
          </AppText>
          <AppText variant="semiBold" color="#555">
            {procedureGroup ?? 'Consulta médica'}
          </AppText>
        </View>
        <View style={styles.containerFlexRow}>
          <TouchableOpacity onPress={onPressEditIcon}>
            <SvgEdit />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPressDeleteIcon}
            style={styles.marginLeftButon}>
            <SvgDelete />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerProcedureDescription}>
        <AppText size="small" color="#555">
          Termo - descrição
        </AppText>
        <AppText variant="semiBold" color="#555">
          {procedureDescription ?? '0.001.01.0700 - Consulta com pediatra'}
        </AppText>
      </View>
      <View style={styles.containerRowMargin}>
        <View style={styles.containerFlex}>
          <AppText size="small" color="#555">
            Data realização
          </AppText>
          <AppText variant="semiBold" color="#555">
            {requestDate ?? '10/06/2021'}
          </AppText>
        </View>
        <View style={styles.containerFlex}>
          <AppText size="small" color="#555">
            Quant.
          </AppText>
          <AppText variant="semiBold" color="#555">
            {quantity ?? '1'}
          </AppText>
        </View>
      </View>
      <View style={styles.containerRowMargin}>
        <View style={styles.containerFlex}>
          <AppText size="small" color="#555">
            Valor total
          </AppText>
          <AppText variant="semiBold" color="#555">
            {totalValue ?? 'R$ 280,00'}
          </AppText>
        </View>
        <View style={styles.containerFlex}>
          <AppText size="small" color="#555">
            Anexos
          </AppText>
          <TouchableOpacity
            onPress={onPressAttachments}
            style={styles.containerButtonAttachments}>
            <AppText color="#09498F">{attachments ?? '2 arquivos'}</AppText>
            <View style={styles.containerSetaIr}>
              <SvgSetaIr width={15} height={15} color={'#09498F'} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProcedureGroupCard;

const styles = StyleSheet.create({
  containerCard: {
    backgroundColor: '#FFF',
    padding: 15,
    elevation: 1,
    borderRadius: 5,
  },
  containerText: {flex: 1},
  containerFlexRow: {flexDirection: 'row'},
  marginLeftButon: {marginLeft: 12},
  containerProcedureDescription: {marginTop: 10},
  containerRowMargin: {flexDirection: 'row', marginTop: 10},
  containerFlex: {flex: 1},
  containerSetaIr: {
    transform: [{rotateZ: '180deg'}],
    marginLeft: 10,
  },
  containerButtonAttachments: {flexDirection: 'row', alignItems: 'center'},
});
