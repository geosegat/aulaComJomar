import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

const IconSelect = ({style, onPressIconSelect, onPressIconNoSelect}) => {
  const [isSelected, setIsSelected] = useState(false);

  const makeSelection = () => {
    setIsSelected(!isSelected);
    if (isSelected) {
      onPressIconNoSelect && onPressIconNoSelect();
    } else {
      onPressIconSelect && onPressIconSelect();
    }
  };

  return (
    <TouchableOpacity onPress={makeSelection} style={[style]}>
      {isSelected ? (
        <View style={styles.containerIconSelect}>
          <View style={styles.containerInternalIconSelect}></View>
        </View>
      ) : (
        <View style={styles.containerIconNoSelect}></View>
      )}
    </TouchableOpacity>
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
