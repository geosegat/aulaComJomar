import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BlueCard from '../BlueCard';
import AppText from '../AppText';

const BankAccountCard = ({bankName, nomeTitular, agencia, conta, style}) => {
  return (
    <BlueCard style={style}>
      <AppText style={styles.marginBottomTextCard} variant="semiBold">
        {bankName}
      </AppText>
      <View style={styles.marginBottomTextCard}>
        <AppText size="small">{nomeTitular}</AppText>
      </View>
      <View style={styles.containerFlexRow}>
        <AppText size="small">Ag.: {agencia}</AppText>
        <View style={{marginLeft: 20}}>
          <AppText size="small">CC: {conta}</AppText>
        </View>
      </View>
    </BlueCard>
  );
};

export default BankAccountCard;

const styles = StyleSheet.create({
  containerFlexRow: {flexDirection: 'row'},
  marginBottomTextCard: {marginBottom: 2},
});
