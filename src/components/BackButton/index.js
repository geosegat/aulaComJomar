import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import SvgSeta from './../../../svgs/seta-esquerda.svg';
import AppText from '../AppText';

const BackButton = ({style, label}) => {
  return (
    <TouchableOpacity style={[styles.containerButtonVoltar, style]}>
      <SvgSeta width={18} height={18} color="white" />
      <AppText size="large" color="#fff">
        {label ?? 'Voltar'}
      </AppText>
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  containerButtonVoltar: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: 15,
  },
});
