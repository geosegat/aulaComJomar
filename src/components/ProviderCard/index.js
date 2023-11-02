import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../AppText';
import CardWithBorder from '../CardWithBorder';

const ProviderCard = ({
  borderColor,
  status,
  statusColor,
  protocol,
  provider,
  providerSpecialty,
  requestDate,
  style,
}) => {
  return (
    <CardWithBorder style={style} color={borderColor}>
      <View style={styles.providerContainer}>
        <AppText variant="semiBold" size="large">
          {provider}
        </AppText>
        <AppText>{providerSpecialty}</AppText>
      </View>
      <View style={styles.protocolContainer}>
        <AppText size="small">Protocolo:</AppText>
        <AppText>{protocol}</AppText>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.statusContainer}>
          <AppText size="small">Situação</AppText>
          <AppText variant="semiBold" color={statusColor}>
            {status}
          </AppText>
        </View>
        <View style={styles.requestDateContainer}>
          <AppText size="small">Data soilicitação</AppText>
          <AppText>{requestDate}</AppText>
        </View>
      </View>
    </CardWithBorder>
  );
};

export default ProviderCard;

const styles = StyleSheet.create({
  providerContainer: {marginBottom: 10},
  protocolContainer: {marginBottom: 10},
  rowContainer: {flexDirection: 'row'},
  statusContainer: {flex: 1},
  requestDateContainer: {flex: 1},
});
