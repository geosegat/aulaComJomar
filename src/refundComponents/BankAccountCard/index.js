import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../../components/AppText';
import App from '../../../App';

const BankAccountCard = ({
  bankName,
  userName,
  bankBranch,
  bankAccount,
  style,
}) => {
  return (
    <View style={[styles.containerCard, style]}>
      <View>
        <AppText variant="semiBold">{bankName ?? 'Banco do Brasil SA'}</AppText>
        <View style={styles.containerBankNameMargin}>
          <AppText size="small" color="#555">
            {userName ?? 'Victor Hugo Prando da Silva'}
          </AppText>
        </View>
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
  );
};

export default BankAccountCard;

const styles = StyleSheet.create({
  containerCard: {padding: 15, elevation: 2, backgroundColor: 'white'},
  containerBankNameMargin: {marginTop: 2},
  containerBankBranchAccount: {flexDirection: 'row', marginTop: 2},
  containerBankAccount: {marginLeft: 25},
});
