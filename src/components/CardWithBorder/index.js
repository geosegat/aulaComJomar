import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CardWithBorder = ({color, children, style}) => {
  const cardStyle = [styles.card, {borderColor: color ?? 'gray'}, style];
  return <View style={cardStyle}>{children}</View>;
};

export default CardWithBorder;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderLeftWidth: 6,
    borderRadius: 8,
    padding: 15,
    elevation: 5,
  },
});
