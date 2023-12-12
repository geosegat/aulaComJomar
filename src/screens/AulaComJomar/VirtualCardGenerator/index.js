import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AppText from '../../../components/AppText';
import App from '../../../../App';

const faker = require('faker');

const VirtualCardGenerator = () => {
  const [creditNumber, setCreditNumber] = useState('');
  const [creditCvv, setCreditCvv] = useState('');

  const generateCreditCard = () => {
    console.log('creditCardNumber');
    const creditCardNumber = faker.finance.creditCardNumber('');

    setCreditNumber(creditCardNumber);
  };
  return (
    <View>
      <View>
        <View style={{width: 16, height: 16, backgroundColor: 'red'}} />
        <View style={{width: 16, height: 16, backgroundColor: 'blue'}} />
        <AppText>{creditNumber}</AppText>
        <AppText>{creditCvv}</AppText>
        <TouchableOpacity
          onPress={generateCreditCard}
          style={{
            width: 16,
            height: 16,
            backgroundColor: 'green',
          }}></TouchableOpacity>
      </View>
    </View>
  );
};

export default VirtualCardGenerator;

const styles = StyleSheet.create({});
