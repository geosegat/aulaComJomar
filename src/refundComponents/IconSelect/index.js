import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

const IconSelect = ({style, showHideSelect}) => {
  return (
    <View style={[style]}>
      {showHideSelect ? (
        <View style={styles.containerIconSelect}>
          <View style={styles.containerInternalIconSelect}></View>
        </View>
      ) : (
        <View style={styles.containerIconNoSelect}></View>
      )}
    </View>
  );
};

export default IconSelect;

const styles = StyleSheet.create({
  containerIconNoSelect: {
    width: 20,
    height: 20,
    borderColor: '#CCCCCC',
    borderWidth: 2,
    borderRadius: 50,
  },
  containerIconSelect: {
    width: 20,
    height: 20,
    borderColor: '#09498F',
    borderWidth: 2,
    borderRadius: 50,
    padding: 2,
  },
  containerInternalIconSelect: {
    backgroundColor: '#09498F',
    flex: 1,
    borderRadius: 50,
  },
});
