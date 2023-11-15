import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BlueCard from '../BlueCard';
import AppText from '../AppText';
import SvgCheck from './../../../svgs/icon-check-green.svg';

const CardSelect = ({label, style, isChecked = false}) => {
  return (
    <BlueCard style={style} showCheckIcon={isChecked}>
      <AppText variant="semiBold" color="#333" size="large">
        {label}
      </AppText>
    </BlueCard>
  );
};

export default CardSelect;

const styles = StyleSheet.create({});
