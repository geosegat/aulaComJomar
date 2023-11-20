import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';
import RadioButtonSelect from '../../refundComponents/RadioButtonSelect';
import Screen81 from '../Screen81';
import Screen67 from '../Screen67';

const AulaComJomar = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [label, setLabel] = useState(0);

  const onPress = () => {
    setIsSelected(prev => {
      return !prev;
    });
    setLabel(label + 1);
  };

  return <Screen67 />;
};

export default AulaComJomar;

const styles = StyleSheet.create({});
