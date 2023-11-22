import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AppText from '../../components/AppText';
import SvgDelete from './../../../svgs/icon-close.svg';
import SvgEdit from './../../../svgs/icon-editar.svg';

const ExpenseCard = ({
  expenseType,
  requestDate,
  totalValue,
  onPressDeleteIcon,
  style,
}) => {
  return (
    <View style={[styles.containerCard, style]}>
      <View style={styles.containerFlex}>
        <View style={styles.containerRow}>
          <View style={styles.containerFlex}>
            <AppText size="small" color="#555">
              Tipo de despesa
            </AppText>
            <AppText variant="semiBold" color="#555">
              {expenseType ?? 'Consulta médica'}
            </AppText>
          </View>

          <View style={styles.containerRow}>
            <TouchableOpacity>
              <SvgEdit />
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerButtonDelete}>
              <SvgDelete />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerReqDateVal}>
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
              Valor total:
            </AppText>
            <AppText variant="semiBold" color="#555">
              {totalValue ?? 'R$ 280,00'}
            </AppText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExpenseCard;

const styles = StyleSheet.create({
  containerCard: {
    backgroundColor: '#FFF',
    padding: 15,
    elevation: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerFlex: {flex: 1},
  containerRow: {flexDirection: 'row'},
  containerReqDateVal: {flexDirection: 'row', marginTop: 10},
  containerButtonDelete: {marginLeft: 12},
});
