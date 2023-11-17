import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AppText from '../../components/AppText';
import SvgSeta from './../../../svgs/seta-esquerda.svg';

const ExpenseDescriptionCard = ({
  cardNumber,
  user,
  type,
  date,
  presentedValue,
  notRefundedValue,
  refundedValue,
  note,
  attachementLinkLabel,
  style,
}) => {
  return (
    <View style={[styles.containerCard, style]}>
      <View>
        <AppText size="xxxlarge" color="#AAA" variant="semiBold">
          {cardNumber ?? '1'}
        </AppText>
      </View>
      <View style={styles.containerTexts}>
        <View style={styles.containerDetails}>
          <View style={styles.contFlex}>
            <View style={styles.containerMargin}>
              <AppText color="#888">Utilizador:</AppText>
            </View>
            <View style={styles.containerMargin}>
              <AppText color="#888">Tipo: </AppText>
            </View>
            <View style={styles.containerMargin}>
              <AppText color="#888">Data despesa: </AppText>
            </View>
          </View>
          <View style={styles.contFlexEnd}>
            <View style={styles.containerMargin}>
              <AppText variant="semiBold" color="#555">
                {user ?? 'Victor Hugo Prando da Silva'}
              </AppText>
            </View>
            <View style={styles.containerMargin}>
              <AppText color="#555">
                {type ?? 'Assistência farmacêutica'}
              </AppText>
            </View>
            <View style={styles.containerMargin}>
              <AppText color="#555">{date ?? '10/07/2020'} </AppText>
            </View>
          </View>
        </View>
        <View style={styles.containerDetails}>
          <View style={styles.contFlex}>
            <View style={styles.containerMargin}>
              <AppText color="#888">Valor apresentado:</AppText>
            </View>
            <View style={styles.containerMargin}>
              <AppText color="#888">Valor não reembolsado: </AppText>
            </View>
            <View style={styles.containerMargin}>
              <AppText color="#888">Valor reembolsado: </AppText>
            </View>
          </View>
          <View style={styles.contFlexEnd}>
            <View style={styles.containerMargin}>
              <AppText variant="semiBold" color="#555">
                {presentedValue ?? 'R$ 60,00'}
              </AppText>
            </View>
            <View style={styles.containerMargin}>
              <AppText color="#555">{notRefundedValue ?? 'R$ 10,00'}</AppText>
            </View>
            <View style={styles.containerMargin}>
              <AppText color="#68B828" variant="semiBol">
                {refundedValue ?? 'R$ 50,00'}
              </AppText>
            </View>
          </View>
        </View>
        {note && (
          <View style={styles.containerNote}>
            <AppText style={styles.containerMargin} variant="semiBold">
              Observações: <AppText>{note}</AppText>
            </AppText>
          </View>
        )}
        <View style={styles.containerAttachementLinkLabel}>
          <View style={styles.contFlex}>
            <AppText color="#888">Anexos</AppText>
          </View>
          <TouchableOpacity style={styles.containerAttachementLinkLabel}>
            <AppText color="#09498F">
              {attachementLinkLabel ?? '2 arquivos anexos'}
            </AppText>
            <View style={styles.containerSetaIr}>
              <SvgSeta width={12} height={12} color={'#09498F'}></SvgSeta>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ExpenseDescriptionCard;

const styles = StyleSheet.create({
  containerCard: {
    padding: 15,
    flexDirection: 'row',
    elevation: 1,
    backgroundColor: '#fff',
  },
  containerTexts: {
    marginLeft: 20,
    flex: 1,
  },
  containerMargin: {marginBottom: 10},
  containerDetails: {
    borderBottomWidth: 1,
    borderColor: 'rgba(136, 136, 136, 0.4)',
    flexDirection: 'row',
    marginBottom: 10,
  },
  contFlex: {flex: 1},
  contFlexEnd: {alignItems: 'flex-end'},
  containerNote: {
    borderBottomWidth: 1,
    borderColor: 'rgba(136, 136, 136, 0.4)',
    marginBottom: 10,
  },
  containerAttachementLinkLabel: {flexDirection: 'row', alignItems: 'center'},
  containerSetaIr: {marginLeft: 8, transform: [{rotateZ: '180deg'}]},
});
