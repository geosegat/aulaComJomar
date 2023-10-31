import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CardPrestadorIndicados = ({color}) => {
  const cardStyle = [styles.card, {borderColor: color ?? 'gray'}];
  return (
    <View style={cardStyle}>
      <Text>Goodlife</Text>
      <Text>Goodlife</Text>
    </View>
  );
};

export default CardPrestadorIndicados;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderLeftWidth: 6,
    borderRadius: 8,
    padding: 15,
    elevation: 5,
  },
});
