import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../../components/AppText';

const UserData = ({userName, cpf, tel, style}) => {
  return (
    <View style={[styles.containerCard, style]}>
      <View>
        <AppText color="#888">Nome:</AppText>
        <View style={styles.marginTop}>
          <AppText color="#888">CPF:</AppText>
        </View>
        <View style={styles.marginTop}>
          <AppText color="#888">Telefone:</AppText>
        </View>
      </View>
      <View style={styles.containerInfos}>
        <AppText color="#888">
          {userName ?? 'Victor Hugo Prando da Silva'}
        </AppText>
        <View style={styles.marginTop}>
          <AppText color="#888">{cpf ?? '058.506.123-00'} </AppText>
        </View>
        <View style={styles.marginTop}>
          <AppText color="#888">{tel ?? '(27) 99912-0123'} </AppText>
        </View>
      </View>
    </View>
  );
};

export default UserData;

const styles = StyleSheet.create({
  containerCard: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#DDD',
    borderBottomWidth: 1,
  },
  containerInfos: {marginLeft: 15},
  marginTop: {marginTop: 7},
});
