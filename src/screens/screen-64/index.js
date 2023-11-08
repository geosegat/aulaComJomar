import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import BotaoAddConta from '../../components/BotaoAddConta';
import AppText from '../../components/AppText';
import BlueCard from '../../components/BlueCard';
import Navbar from '../../components/Navbar';
import App from '../../../App';

const Screen64 = () => {
  return (
    <View>
      <View style={styles.marginBotNavBar}>
        <Navbar label={'Dados bancários'} />
      </View>
      <View style={styles.marginButtonAddConta}>
        <BotaoAddConta />
      </View>
      <View style={styles.containeHeaderCard}>
        <View style={styles.marginCard}>
          <AppText size="xxlarge" variant="semiBold">
            Contas cadastradas
          </AppText>
        </View>
        <View style={styles.marginCard}>
          <BlueCard>
            <View style={styles.marginBottomTextCard}>
              <AppText variant="semiBold">Banco do Brasil SA</AppText>
            </View>
            <View style={styles.marginBottomTextCard}>
              <AppText size="small">Victor Hugo Prando da Silva</AppText>
            </View>
            <View style={styles.containerFlexRow}>
              <AppText size="small">Ag.: 0070</AppText>
              <View style={{marginLeft: 20}}>
                <AppText size="small">CC: 12099-0</AppText>
              </View>
            </View>
          </BlueCard>
        </View>
        <View style={styles.marginCard}>
          <BlueCard>
            <View style={styles.marginBottomTextCard}>
              <AppText variant="semiBold">Banco do Brasil SA</AppText>
            </View>
            <View style={styles.marginBottomTextCard}>
              <AppText size="small">Victor Hugo Prando da Silva</AppText>
            </View>
            <View style={styles.containerFlexRow}>
              <AppText size="small">Ag.: 0070</AppText>
              <View style={{marginLeft: 20}}>
                <AppText size="small">CC: 12099-0</AppText>
              </View>
            </View>
          </BlueCard>
        </View>
      </View>
    </View>
  );
};

export default Screen64;

const styles = StyleSheet.create({
  marginBotNavBar: {marginBottom: 20},
  marginButtonAddConta: {
    marginHorizontal: 15,
    marginBottom: 20,
  },
  containeHeaderCard: {marginHorizontal: 15},
  marginCard: {marginBottom: 10},
  marginBottomTextCard: {marginBottom: 2},
  containerFlexRow: {flexDirection: 'row'},
});
