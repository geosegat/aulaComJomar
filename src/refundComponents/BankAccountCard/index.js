import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AppText from '../../components/AppText';
import SvgSeta from './../../../svgs/seta-esquerda.svg';
import SvgEdit from './../../../svgs/icon-editar.svg';

const BankAccountCard = ({
  bankName,
  userName,
  bankBranch,
  bankAccount,
  style,
  showSetaIcon = false,
  showSetaEdit = false,
  onPressSetaIr,
  disabled,
}) => {
  return (
    <TouchableOpacity disabled={disabled} style={[styles.containerCard, style]}>
      <View style={styles.containerTexts}>
        <View style={styles.containerRow}>
          <AppText variant="semiBold" style={styles.containerTexts}>
            {bankName ?? 'Banco do Brasil SA'}
          </AppText>
          {showSetaEdit && (
            <TouchableOpacity>
              <SvgEdit />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.containerBankNameMargin}>
          <AppText size="small" color="#555">
            {userName ?? 'Victor Hugo Prando da Silva'}
          </AppText>
        </View>
        <View style={styles.containerBankBranchAccount}>
          <AppText size="small" color="#555">
            {bankBranch ?? 'Ag.: 0070'}
          </AppText>
          <View style={styles.containerBankAccount}>
            <AppText size="small" color="#555">
              {bankAccount ?? 'CC: 12099-0'}
            </AppText>
          </View>
        </View>
      </View>
      {showSetaIcon && (
        <View onPress={onPressSetaIr} style={styles.containerSetaIr}>
          <SvgSeta width={12} height={12} color={'#09498F'} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default BankAccountCard;

const styles = StyleSheet.create({
  containerCard: {
    padding: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerRow: {flexDirection: 'row'},
  containerTexts: {flex: 1},
  containerBankNameMargin: {marginTop: 2},
  containerBankBranchAccount: {flexDirection: 'row', marginTop: 2},
  containerBankAccount: {marginLeft: 25},
  containerSetaIr: {
    transform: [{rotateZ: '180deg'}],
  },
});
