import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React from 'react';

const CardWithBorder = ({
  color,
  children,
  style,
  disabled = false,
  onPress,
}) => {
  const cardStyle = [styles.card, {borderColor: color ?? 'gray'}, style];

  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={cardStyle}>
      {children}
    </TouchableOpacity>
  );
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
