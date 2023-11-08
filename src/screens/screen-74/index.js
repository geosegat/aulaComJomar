import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navbar from '../../components/Navbar';
import AppText from '../../components/AppText';
import BlueCard from '../../components/BlueCard';

const Screen74 = () => {
  return (
    <View>
      <View style={styles.marginBotNavBar}>
        <Navbar label={'Comprovantes'}></Navbar>
      </View>
      <View style={styles.marginText}>
        <AppText size="xxlarge" variant="semiBold" color="#333">
          Documentos necessários
        </AppText>
      </View>
      <View style={styles.containerBlueCard}>
        <BlueCard>
          <AppText variant="semiBold" color="#333" size="large">
            Nota fiscal ou recibo - Consulta médica
          </AppText>
        </BlueCard>
      </View>
      <View style={styles.containerBlueCard}>
        <BlueCard>
          <AppText variant="semiBold" color="#333" size="large">
            Autorização
          </AppText>
        </BlueCard>
      </View>
    </View>
  );
};

export default Screen74;

const styles = StyleSheet.create({
  marginBotNavBar: {marginBottom: 20},
  marginText: {marginHorizontal: 15, marginBottom: 20},
  containerBlueCard: {marginHorizontal: 15, marginBottom: 13},
});
