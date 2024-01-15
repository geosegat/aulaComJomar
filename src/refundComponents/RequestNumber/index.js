import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../../components/AppText';

const RequestNumber = ({requestNumber, style}) => {
  return (
    <View style={[styles.containerCard, style]}>
      <AppText color="#888">Número da solicitação</AppText>
      <AppText size="xxxlarge" color="#888" variant="semiBold">
        {requestNumber ?? '482394829'}
      </AppText>
    </View>
  );
};

export default RequestNumber;

const styles = StyleSheet.create({
  containerCard: {
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#DDD',
    borderBottomWidth: 1,
  },
});
