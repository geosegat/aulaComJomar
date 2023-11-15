import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AppText from '../../components/AppText';
import App from '../../../App';
import SvgSeta from './../../../svgs/seta-esquerda.svg';

const BankAccountCard = ({
  bankName,
  userName,
  bankBranch,
  bankAccount,
  style,
  showSetaIcon = false,
}) => {
  return (
    <View style={[styles.containerCard, style]}>
      <View style={styles.containerTexts}>
        <AppText variant="semiBold">{bankName ?? 'Banco do Brasil SA'}</AppText>
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
        <TouchableOpacity style={styles.containerSetaIr}>
          <SvgSeta width={12} height={12} color={'#09498F'} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default BankAccountCard;

const styles = StyleSheet.create({
  containerCard: {
    padding: 15,
    elevation: 2,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerTexts: {flex: 1},
  containerBankNameMargin: {marginTop: 2},
  containerBankBranchAccount: {flexDirection: 'row', marginTop: 2},
  containerBankAccount: {marginLeft: 25},
  containerSetaIr: {
    transform: [{rotateZ: '180deg'}],
  },
});
