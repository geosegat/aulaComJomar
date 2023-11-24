import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

const IconSelect = ({style, showHideSelect, border, onPress}) => {
  return (
    <TouchableOpacity style={[style]} onPress={onPress}>
      {showHideSelect ? (
        <View style={styles.containerIconSelect}>
          <View style={styles.containerInternalIconSelect}></View>
        </View>
      ) : (
        <View style={[styles.containerIconNoSelect, border]}></View>
      )}
    </TouchableOpacity>
  );
};

export default IconSelect;

const styles = StyleSheet.create({
  containerIconNoSelect: {
    width: 25,
    height: 25,
    borderColor: '#CCCCCC',
    borderWidth: 2,
    borderRadius: 50,
  },
  containerIconSelect: {
    width: 25,
    height: 25,
    borderColor: '#547789',
    borderWidth: 2,
    borderRadius: 50,
    padding: 2,
  },
  containerInternalIconSelect: {
    backgroundColor: '#547789',
    flex: 1,
    borderRadius: 50,
  },
});
