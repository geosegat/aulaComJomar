// Screen56.js
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Navbar from '../../components/Navbar';
import RefundCard from '../../refundComponents/RefundCard';
import AppText from '../../components/AppText';
import Screen60 from '../Screen60';

const Screen56 = () => {
  const navigation = useNavigation();

  const goToScreen58 = () => {
    navigation.navigate('Screen58', {protocol: '482394829'});
  };

  const goToScreen57 = () => {
    navigation.navigate('Screen57', {protocol: '482394829'});
  };
  const goToScreen60 = () => {
    navigation.navigate('Screen60');
  };

  return (
    <View style={styles.container}>
      <Navbar
        label={'Reembolso Cassi'}
        showHideAdd
        onPressBotaoAdd={goToScreen60}
      />
      <View style={styles.containerCards}>
        <View style={styles.containerCardRascunho}>
          <AppText
            size="large"
            variant="semiBold"
            style={styles.containerAppText}>
            Rascunhos
          </AppText>
          <TouchableOpacity>
            <RefundCard
              onPressCard={goToScreen58}
              protocol={'482394829'}
              borderColor={'#888'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.containerCardRefundsRequested}>
          <AppText
            size="large"
            variant="semiBold"
            style={styles.containerAppText}>
            Rembolsos solicitados
          </AppText>
          <RefundCard
            protocol={'482394829'}
            borderColor={'#888'}
            onPressCard={goToScreen57}
          />
        </View>
        <View style={styles.containerCardRefundsRequested}>
          <RefundCard
            protocol={'482394829'}
            borderColor={'#888'}
            onPressCard={goToScreen57}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.containerExemploVazio}>
        <AppText color="#09498F" variant="semiBold" size="small">
          Exemplo VAZIO
        </AppText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  containerCards: {
    flex: 1,
    paddingVertical: 19,
    paddingHorizontal: 15,
  },
  containerCardRascunho: {
    marginBottom: 20,
  },
  containerCardRefundsRequested: {
    marginBottom: 10,
  },
  containerAppText: {marginBottom: 10},

  containerExemploVazio: {alignItems: 'center', padding: 10},
});

export default Screen56;
