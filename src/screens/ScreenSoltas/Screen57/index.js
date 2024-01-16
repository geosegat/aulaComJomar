import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

import Navbar from '../../../components/Navbar';
import RequestNumber from '../../../refundComponents/RequestNumber';
import AppText from '../../../components/AppText';
import UserData from '../../../refundComponents/UserData';
import RowItemWithLink from '../../../refundComponents/RowItemWithLink';
import RowItem from '../../../refundComponents/RowItem';
import ExpenseDescriptionCard from '../../../refundComponents/ExpenseDescriptionCard';
import {useNavigation} from '@react-navigation/native';

const Screen57 = () => {
  const navigation = useNavigation();

  const goToScreen56 = () => {
    navigation.navigate('Screen56', {protocol: '482394829'});
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Navbar
        label={'Detalhes da solicitação'}
        onPressBotaoBack={goToScreen56}
      />
      <View>
        <RequestNumber style={styles.containerRequestNumber} />
        <AppText style={styles.containerAppText} size="small" color="#888">
          DADOS DO SOLICITANTE
        </AppText>
        <UserData style={styles.containerMargin10}></UserData>
        <AppText style={styles.containerAppText} size="small" color="#888">
          INFORMACOES DO PEDIDO
        </AppText>
        <RowItemWithLink style={styles.containerMargin10} />
        <RowItem style={styles.containerRowItem} />
        <AppText style={styles.containerAppText} size="small" color="#888">
          OBSERVAÇÕES GERAIS
        </AppText>
        <RowItem
          style={styles.containerMargin10}
          leftLabel={
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
          showRightLabel
        />
        <AppText style={styles.containerAppText} size="small" color="#888">
          DESCRIÇÃO DOS VALORES TOTAIS
        </AppText>
        <RowItem
          style={styles.containerMargin10}
          rightLabelStyle={styles.styleText}
          leftLabel={'Total apresentado'}
          rightLabel={'R$ 100,00'}
        />
        <RowItem
          style={styles.containerRowItem}
          leftLabel={'Total não embolsado'}
          rightLabel={'R$ 10,00'}
        />
        <RowItem
          style={styles.containerRowItem}
          rightLabelStyle={styles.styleText}
          leftLabel={'Total reembolsado'}
          rightLabel={'R$ 90,00'}
        />
      </View>
      <AppText style={styles.containerAppText} size="small" color="#888">
        DESCRIÇÃO DAS DESPESAS
      </AppText>
      <ExpenseDescriptionCard
        style={styles.containerMargin10}
        note={
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.'
        }
      />
      <ExpenseDescriptionCard
        style={styles.containerMargin10}
        note={
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.'
        }
        cardNumber={'2'}
      />
      <View style={styles.containerMargin10}></View>
    </ScrollView>
  );
};

export default Screen57;

const styles = StyleSheet.create({
  containerRequestNumber: {marginTop: 20},
  containerAppText: {marginTop: 20, marginLeft: 15},
  containerMargin10: {marginTop: 10},
  containerRowItem: {borderTopWidth: 0},
  styleText: {fontWeight: '500'},
});
